import db from "../models/index";

let getHomepage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log(data);
    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

let getAboutPage = async (req, res) => {
  return res.render("aboutPage.ejs");
};

module.exports = {
  getHomepage: getHomepage,
  getAboutPage: getAboutPage,
};
