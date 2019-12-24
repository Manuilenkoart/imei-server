const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const indexShema = new Schema({
  id: String,
  indexbd: String
});

const IdexBd = mongoose.model("IndexBd", indexShema);
module.exports = IdexBd;
