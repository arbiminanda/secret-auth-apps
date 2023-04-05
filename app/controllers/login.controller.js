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
};
