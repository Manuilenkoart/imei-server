const MongoClient = require("mongodb").MongoClient;
const { uri } = require("./config");

const readBdJson = require("./readBdJson");

const pushItemToDb = () => {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  client.connect(err => {
    const collection = client.db("test").collection("phones");
    // perform actions on the collection object

    collection.countDocuments(function(err, results) {
      let DbLength = results;

      readBdJson().then(data => {
        const itemsFromDbJson = data;
        console.log("itemsFromDbJson", itemsFromDbJson.length);

        console.log("DbLength", DbLength);
        if (DbLength < itemsFromDbJson.length) {
          console.log("start add item so db");
          let arryToAddDb = [];

          for (let i = DbLength; i < itemsFromDbJson.length; i += 1) {
            arryToAddDb.push(itemsFromDbJson[i]);
          }
          console.log("arryToAddDb", arryToAddDb.length);

          collection.insertMany(arryToAddDb, (err, results) => {
            if (err) console.log(err);
            if (results) console.log("Number of documents inserted", results);
          });
        } else {
          console.log("exit from burn db from file");
        }
      });
    });
  });
  client.close();
};

// pushItemToDb();  //раскомментировать чтобы добавить json БД в mongo
module.exports = pushItemToDb;
