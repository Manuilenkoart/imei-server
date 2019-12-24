const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");
require("./services/index");
const { uri } = require("./config");
const app = express();

mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  error => {
    if (error) console.log(error);
    console.log("DB connected");
  }
);
app.use(cors("*"));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", apiRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}!`);
});
