const Phone = require("../models/PhoneModel");

const getPhoneByImei = async (req, res) => {
  const imei = req.params.imei;

  try {
    const findImei = await Phone.findOne({ IMEI: imei });
    res.json({
      status: `OK `,
      findImei
    });
  } catch (error) {
    res.status(400).json({
      status: "BAD",
      error: error,
      message: error.message
    });
  }
};

module.exports = getPhoneByImei;
