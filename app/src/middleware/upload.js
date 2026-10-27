const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const dbConfig = require("../config/db");
const MongoClient = require("mongodb").MongoClient;

console.log(`DB: ${dbConfig.url}, ${dbConfig.database}`);

const promise = MongoClient.connect(dbConfig.url).then(client => client.db(dbConfig.database));

var storage = new GridFsStorage({
  db: promise,
  // url: dbConfig.url + dbConfig.database,
  // options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-sample-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: dbConfig.imgBucket,
      filename: `${Date.now()}-sample-${file.originalname}`
    };
  }
});

var uploadFiles = multer({ storage: storage }).array("file", 10);
// var uploadFiles = multer({ storage: storage }).single("file");
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;
