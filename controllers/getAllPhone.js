const Phone = require("../models/PhoneModel");

const getAllPhone = async (req, res) => {
  try {
    const findAllPhone = await Phone.find({});
    res.json({
      status: `OK `,
      findAllPhone
    });
  } catch (error) {
    res.status(400).json({
      status: "BAD",
      error: error,
      message: error.message
    });
  }
};
module.exports = getAllPhone;
