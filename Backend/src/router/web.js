import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

let initWebRouter = (app) => {
  router.get("/", homeController.getHomepage);
  router.get("/about", homeController.getAboutPage);

  //FORM
  router.get("/form", homeController.getFormCRUD);

  //CRUD
  router.post("/create-crud", homeController.createCRUD);
  router.get("/read-crud", homeController.getCRUD);
  router.post("/update-crud", homeController.updateCRUD);
  router.get("/delete-crud", homeController.deleteCRUD);
  router.get("/edit-crud", homeController.editCRUD);

  return app.use("/", router);
};

module.exports = initWebRouter;
