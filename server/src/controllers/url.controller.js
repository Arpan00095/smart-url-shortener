const validator = require("validator");

const {
  createShortUrl,
  getUrlByShortCode,
  checkShortCodeExists,
  incrementClicks,
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
    const { original_url, custom_code } = req.body;

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
      short_url: `http://localhost:5000/${existingUrl.short_code}`,
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

    const url = await createShortUrl({
      original_url,
      short_code: shortCode,
      user_id: req.user.id,
    });

    return res.status(201).json({
      success: true,
      message: "Short URL created successfully",
      data: {
        ...url,
        short_url: `http://localhost:5000/${shortCode}`,
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

    // Find URL by short code
    const url = await getUrlByShortCode(shortCode);

    if (!url) {
      return res.status(404).json({
        success: false,
        message: "Short URL not found",
      });
    }

    // Increase click count
    await incrementClicks(url.id, url.clicks);

    // Redirect to original URL
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

module.exports = {
  shortenUrl,
  redirectUrl,
  myUrls,
  deleteUrlById,
  updateUrlById,
  urlStats,
};