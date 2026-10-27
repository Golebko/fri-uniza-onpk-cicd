const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const infoController = require("../controllers/info");
const uploadController = require("../controllers/upload");

let routes = app => {
  router.get("/", homeController.getHome);

  router.get("/info", infoController.getBuildInfo);

  router.post("/upload", uploadController.uploadFiles);
  router.get("/files", uploadController.getListFiles);
  router.get("/files/:name", uploadController.download);

  return app.use("/", router);
};

module.exports = routes;