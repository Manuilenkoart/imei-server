const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhoneSchema = new Schema({
  ID: { type: String },
  INSERT_DATE: String,
  NM: String,
  NZ: String,
  IMEI: String,
  OVD: String,
  NK: String,
  DK: String,
  DTL: [{ ID: String, NM: String, MRK: String, NOMER: String }]
});

const Phone = mongoose.model("Phone", PhoneSchema);

module.exports = Phone;
