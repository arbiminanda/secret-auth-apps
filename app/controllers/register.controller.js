const db = require("../models");
const User = db.User;
require("dotenv").config();
const hash = require(process.env.HASH_METHOD);

exports.registerPage = (req, res) => {
  res.render("register");
};

exports.createUser = (req, res) => {
  const newUser = {
    email: req.body.username,
    password: hash(req.body.password),
  };
  User.create(newUser)
    .then(() => res.render("secrets"))
    .catch((err) => console.log(err));
};
