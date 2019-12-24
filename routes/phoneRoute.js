const router = require("express").Router();
const {
  getPhoneByImei,
  getAllPhone
  // createPhone,
} = require("../controllers");

router.get("/:imei", getPhoneByImei); // get phone by imei

router.get("/", getAllPhone);
// router.post("/", createPhone);
module.exports = router;
