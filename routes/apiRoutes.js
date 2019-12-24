const router = require("express").Router();

const phoneRoute = require("./phoneRoute");

router.use("/imei", phoneRoute);

module.exports = router;
