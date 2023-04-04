const db = require("../models");
const User = db.User;
require("dotenv").config();
const hashMethod = require(process.env.HASH_METHOD);
const saltRounds = Number(process.env.SALT_ROUNDS);

exports.registerPage = (req, res) => {
  res.render("register");
};

exports.createUser = (req, res) => {
  const newUser = {
    email: req.body.username,
    password: hashMethod.hashSync(req.body.password, saltRounds),
  };
  User.create(newUser)
    .then(() => res.render("secrets"))
    .catch((err) => console.log(err));
};
