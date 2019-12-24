const Phone = require("../models/PhoneModel");

const createPhone = async (req, res) => {
  const newPhoneData = req.body;

  try {
    const newPhone = await new Phone(newPhoneData);
    newPhone.save((err, result) => {
      res.json({
        status: `OK`,
        phone: result
      });
    });
  } catch (error) {
    res.status(400).json({
      status: "BAD",
      error: error,
      message: error.message
    });
  }
};

module.exports = createPhone;
