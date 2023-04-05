const db = require("../models");
const User = db.User;
require("dotenv").config();
const passport = require("passport");

exports.registerPage = (req, res) => {
  res.render("register");
};

exports.createUser = (req, res) => {
  User.register({ username: req.body.username }, req.body.password).then(() => {
    passport.authenticate("local")(req, res, function () {
      res.render("secrets");
    });
  });
};
