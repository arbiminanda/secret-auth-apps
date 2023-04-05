const db = require("../models");
const User = db.User;
require("dotenv").config();
const passport = require("passport");

exports.loginPage = (req, res) => {
  res.render("login");
};

exports.userLogin = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  req.login(user, function () {
    passport.authenticate("local")(req, res, function () {
      res.redirect("secrets");
    });
  });
  // credentials = {
  //   username: req.body.username,
  //   password: req.body.password,
  // };
  // User.findOne({ email: credentials.username })
  //   .then((userData) => {
  //     if (userData) {
  //       if (hashMethod.compareSync(credentials.password, userData.password)) {
  //         res.render("secrets");
  //       }
  //     }
  //   })
  //   .catch((err) => console.log(err));
};
