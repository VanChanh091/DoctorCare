import db from "../models/index";
import CrudService from "../service/CrudService";

let getHomepage = async (req, res) => {
  try {
    let data = await db.User.findAll(); //Use duoc lay ra tu trong user.js
    console.log(data);
    return res.render("homePage.ejs", {
      data: JSON.stringify(data), //data duoc khoi tao ra de truyen du lieu qua homePage.ejs duoi dang json
    });
  } catch (error) {
    console.log(error);
  }
};

let getAboutPage = (req, res) => {
  return res.render("aboutPage.ejs");
};

let getFormCRUD = (req, res) => {
  return res.render("formCrud.ejs");
};

let createCRUD = async (req, res) => {
  let message = await CrudService.createNewUser(req.body);
  console.log(message);
  return res.send("post curd from server");
};

let getCRUD = async (req, res) => {
  const data = await CrudService.getAllUsers();
  return res.render("displayTable.ejs", {
    data: data,
  });
};

let editCRUD = async (req, res) => {
  const userId = req.query.id;
  if (userId) {
    const data = await CrudService.getInfoUserById(userId);
    return res.render("updateCrud.ejs", {
      data: data,
    });
  } else {
    return res.send("User not found");
  }
};

let updateCRUD = async (req, res) => {
  try {
    const user = req.body;
    await CrudService.updateUser(user);
    // return res.render("displayTable.ejs", {
    //   data: userUpdate,
    // });
    return res.redirect("/read-crud");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

let deleteCRUD = async (req, res) => {
  const userId = req.query.id;
  if (userId) {
    await CrudService.deleteUserById(userId);
    // return res.render("displayTable.ejs");
    return res.send("Delete user complete");
  } else {
    return res.send("User not found");
  }
};

module.exports = {
  getHomepage,
  getAboutPage,
  getFormCRUD,
  createCRUD,
  getCRUD,
  editCRUD,
  deleteCRUD,
  updateCRUD,
};
