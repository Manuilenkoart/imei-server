var https = require("https");
var fs = require("fs");
const path = require("path");
const { getDbLink } = require("../config");
const dbPathToFile = path.resolve(__dirname, "../", "db/mvswantedmt.json");
const downloadBdFromSite = () => {
  var Xmas1 = new Date();
  console.log("START download", Xmas1);

  var file = fs.createWriteStream(dbPathToFile);
  var request = https.get(getDbLink, function(response) {
    response.pipe(file);
  });
};
var Xmas2 = new Date();
console.log("start script", Xmas2);
// setInterval(downloadBdFromSite, 120000);

// downloadBdFromSite(); //раскомментировать чтобы скачать БД
module.exports = downloadBdFromSite;
