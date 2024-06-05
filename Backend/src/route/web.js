import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

let initWebRouter = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/about", homeController.getAboutPage);
  return app.use("/", router);
};

module.exports = initWebRouter;
