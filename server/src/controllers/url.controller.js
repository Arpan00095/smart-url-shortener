const validator = require("validator");
const bcrypt = require("bcrypt");
const UAParser = require("ua-parser-js");
const axios = require("axios");
const {
  createNotification,
} = require("../services/notifications.service");


const {
  createShortUrl,
  getUrlByShortCode,
  checkShortCodeExists,
  incrementClicks,
  saveClickAnalytics,
  getWeeklyAnalytics,
  getMyUrls,
  getUrlStats,
  getUrlByOriginalUrl,
  getUrlById,
  deleteUrl,
  updateUrl,
} = require("../services/url.service");

// Random 6-character short code
const generateShortCode = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let code = "";

  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return code;
};

const shortenUrl = async (req, res) => {
  try {
    const {
      original_url,
      custom_code,
      password,
      expires_at,
    } = req.body;

    if (!original_url) {
      return res.status(400).json({
        success: false,
        message: "Original URL is required",
      });
    }

    // Validate URL
    if (!validator.isURL(original_url, {
      require_protocol: true,
    })) {
      return res.status(400).json({
        success: false,
        message: "Invalid URL",
      });
    }

    // Check if this URL already exists for this user
    const existingUrl = await getUrlByOriginalUrl(
      original_url,
      req.user.id
    );

    if (existingUrl) {
      return res.status(200).json({
        success: true,
        message: "URL already exists",
        data: {
          ...existingUrl,
          short_url: `${process.env.SERVER_URL}/${existingUrl.short_code}`,
        },
      });
    }

    let shortCode;

    // Agar custom code diya gaya hai
    if (custom_code) {
      const exists = await checkShortCodeExists(custom_code);

      if (exists) {
        return res.status(409).json({
          success: false,
          message: "Custom short code already exists",
        });
      }

      shortCode = custom_code;
    } else {
      shortCode = generateShortCode();
    }

    const hashedPassword = password
      ? await bcrypt.hash(password, 10)
      : null;

    // console.log("REQUEST BODY:", req.body);

    // console.log("HASHED PASSWORD:", hashedPassword);

    // console.log("INSERT DATA:", {
    //   original_url,
    //   short_code: shortCode,
    //   user_id: req.user.id,
    //   password: hashedPassword,
    //   expires_at: expires_at || null,
    //   is_active: true,
    // });



    const url = await createShortUrl({
      original_url,
      short_code: shortCode,
      user_id: req.user.id,
      password: hashedPassword,
      is_protected: !!password,
      expires_at: expires_at || null,
      is_active: true,
    });
    await createNotification({
      user_id: req.user.id,
      title: "New Short Link Created 🔗",
      message: `Short link "${shortCode}" has been created successfully.`,
      type: "success",
    });
    if (password) {
      await createNotification({
        user_id: req.user.id,
        title: "Password Protection Enabled 🔒",
        message: `Password protection enabled for "${shortCode}".`,
        type: "info",
      });
      if (custom_code) {
        await createNotification({
          user_id: req.user.id,
          title: "Custom URL Created ✨",
          message: `Custom short link "${custom_code}" created successfully.`,
          type: "success",
        });
        if (expires_at) {
          await createNotification({
            user_id: req.user.id,
            title: "Expiry Date Added ⏰",
            message: "Your short link now has an expiration date.",
            type: "info",
          });
        }
      }
    }

    return res.status(201).json({
      success: true,
      message: "Short URL created successfully",
      data: {
        ...url,
        short_url: `${process.env.SERVER_URL}/${shortCode}`,
      },
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const redirectUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;

    // Find URL
    const url = await getUrlByShortCode(shortCode);

    // console.log("URL DATA:", url);

    if (!url) {
      return res.status(404).json({
        success: false,
        message: "Short URL not found",
      });
    }

    // Check Active
    if (url.is_active === false) {
      return res.status(403).json({
        success: false,
        message: "This link has been disabled",
      });
    }

    // Check Expiry
    if (
      url.expires_at &&
      new Date(url.expires_at) < new Date()
    ) {
      return res.status(403).json({
        success: false,
        message: "This link has expired",
      });
    }

    // Password Protected
    if (url.password) {
      return res.redirect(
        `${process.env.CLIENT_URL}/protected/${shortCode}`
      );
    }

    // Increase Click
    await incrementClicks(url.id, url.clicks);

    // Parse User-Agent
    const parser = new UAParser(req.headers["user-agent"]);
    const result = parser.getResult();
    // Get Country & City from IP
    let country = "Unknown";
    let city = "Unknown";

    try {
      const ip =
        req.headers["x-forwarded-for"]?.split(",")[0] ||
        req.ip ||
        "";
      // console.log("Client IP:", ip);

      const response = await axios.get(`https://ipwho.is/${ip}`);
      // console.log(response.data);

      if (response.data.success) {
        country = response.data.country || "Unknown";
        city = response.data.city || "Unknown";
      }
    } catch (error) {
      console.log("Geo Location Error:", error.message);
    }

    await saveClickAnalytics({
      url_id: url.id,
      user_agent: req.headers["user-agent"] || null,
      referrer: req.headers.referer || "Direct",
      ip_address: req.ip || null,

      country: country,
      city: city,

      device: result.device.type || "Desktop",
      browser: result.browser.name || "Unknown",
      os: result.os.name || "Unknown",
    });

    // Redirect
    return res.redirect(url.original_url);

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



const myUrls = async (req, res) => {
  try {
    const urls = await getMyUrls(req.user.id);

    return res.status(200).json({
      success: true,
      count: urls.length,
      data: urls,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteUrlById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find URL
    const url = await getUrlById(id);

    if (!url) {
      return res.status(404).json({
        success: false,
        message: "URL not found",
      });
    }

    // Authorization Check
    if (url.user_id !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this URL",
      });
    }

    // Delete URL
    await deleteUrl(id);
    await createNotification({
      user_id: req.user.id,
      title: "URL Deleted 🗑️",
      message: `Short link "${url.short_code}" has been deleted.`,
      type: "warning",
    });

    return res.status(200).json({
      success: true,
      message: "URL deleted successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateUrlById = async (req, res) => {
  try {
    const { id } = req.params;
    const { original_url } = req.body;

    // Validation
    if (!original_url) {
      return res.status(400).json({
        success: false,
        message: "Original URL is required",
      });
    }

    // Find URL
    const url = await getUrlById(id);

    if (!url) {
      return res.status(404).json({
        success: false,
        message: "URL not found",
      });
    }

    // Authorization
    if (url.user_id !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to update this URL",
      });
    }

    // Update
    const updatedUrl = await updateUrl(id, original_url);
    await createNotification({
      user_id: req.user.id,
      title: "URL Updated ✏️",
      message: `Short link "${url.short_code}" has been updated.`,
      type: "info",
    });

    return res.status(200).json({
      success: true,
      message: "URL updated successfully",
      data: updatedUrl,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const urlStats = async (req, res) => {
  try {
    const urls = await getUrlStats(req.user.id);

    const totalUrls = urls.length;

    const totalClicks = urls.reduce((sum, url) => {
      return sum + url.clicks;
    }, 0);

    let mostClicked = null;

    if (urls.length > 0) {
      mostClicked = urls.reduce((prev, current) => {
        return prev.clicks > current.clicks ? prev : current;
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        total_urls: totalUrls,
        total_clicks: totalClicks,
        most_clicked: mostClicked,
      },
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const weeklyAnalytics = async (req, res) => {
  try {
    const clicks = await getWeeklyAnalytics(req.user.id);

    const weekly = {
      Mon: 0,
      Tue: 0,
      Wed: 0,
      Thu: 0,
      Fri: 0,
      Sat: 0,
      Sun: 0,
    };

    clicks.forEach((item) => {
      const day = new Date(item.clicked_at).toLocaleDateString("en-US", {
        weekday: "short",
      });

      if (weekly[day] !== undefined) {
        weekly[day]++;
      }
    });

    return res.status(200).json({
      success: true,
      data: weekly,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const verifyPassword = async (req, res) => {
  try {
    const { shortCode, password } = req.body;

    const url = await getUrlByShortCode(shortCode);

    if (!url) {
      return res.status(404).json({
        success: false,
        message: "URL not found",
      });
    }

    const match = await bcrypt.compare(
      password,
      url.password
    );

    if (!match) {
      return res.status(401).json({
        success: false,
        message: "Incorrect Password",
      });
    }

    await incrementClicks(url.id, url.clicks);

    return res.json({
      success: true,
      original_url: url.original_url,
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getUrlInfo = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const url = await getUrlByShortCode(shortCode);

    if (!url) {
      return res.status(404).json({
        success: false,
        message: "Short URL not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        id: url.id,
        original_url: url.original_url,
        protected: !!url.password,
        expires_at: url.expires_at,
        is_active: url.is_active,
      },
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  shortenUrl,
  redirectUrl,
  verifyPassword,
  myUrls,
  urlStats,
  weeklyAnalytics,
  deleteUrlById,
  updateUrlById,
  getUrlInfo,
};