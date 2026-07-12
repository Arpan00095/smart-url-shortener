const { createShortUrl } = require("../services/url.service");

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
    const { original_url } = req.body;

    if (!original_url) {
      return res.status(400).json({
        success: false,
        message: "Original URL is required",
      });
    }

    const shortCode = generateShortCode();

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

module.exports = {
  shortenUrl,
};