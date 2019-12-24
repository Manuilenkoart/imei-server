const fs = require("fs");
const path = require("path");
const dbPath = path.resolve(__dirname, "../", "db/mvswantedmt.json");

const readBdJson = async () => {
  try {
    let mvswantedmt = await fs.readFileSync(dbPath, "utf-8").trim();
    mvswantedmt = JSON.parse(mvswantedmt);
    return mvswantedmt;
  } catch (err) {
    console.log("err", err);
  }
};

module.exports = readBdJson;
