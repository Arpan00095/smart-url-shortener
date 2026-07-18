const qrService = require("../services/qr.service");

const createQR = async (req, res) => {
  try {
   const { original_url, qr_image } = req.body;
    const qr = await qrService.createQR({
      original_url,
      qr_image,
      user_id: req.user.id,
    });

    res.status(201).json({
      success: true,
      data: qr,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Failed to save QR",
    });
  }
};

const getMyQRs = async (req, res) => {
  try {
    const data = await qrService.getMyQRs(req.user.id);

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Failed to fetch QRs",
    });
  }
};

const deleteQR = async (req, res) => {
  try {
    await qrService.deleteQR(req.params.id);

    res.json({
      success: true,
      message: "QR Deleted Successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Delete Failed",
    });
  }
};

module.exports = {
  createQR,
  getMyQRs,
  deleteQR,
};