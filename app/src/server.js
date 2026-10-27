const cors = require("cors");
const express = require("express");
const app = express();
const initRoutes = require("./routes");

require("dotenv").config();

var corsOptions = {
  "origin":"*",
  "methods":"GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue":false,
  "optionsSuccessStatus":204
}

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = process.env.SERVER_PORT || 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
  console.log(`Build Time: ${process.env.BUILD_TIME}`)
  console.log(`Build Version: ${process.env.BUILD_VERSION}`)
});
