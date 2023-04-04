const db = require("../models");
const User = db.User;
require("dotenv").config();
const hashMethod = require(process.env.HASH_METHOD);

exports.loginPage = (req, res) => {
  res.render("login");
};

exports.userLogin = (req, res) => {
  credentials = {
    username: req.body.username,
    password: req.body.password,
  };
  User.findOne({ email: credentials.username })
    .then((userData) => {
      if (userData) {
        if (hashMethod.compareSync(credentials.password, userData.password)) {
          res.render("secrets");
        }
      }
    })
    .catch((err) => console.log(err));
};
