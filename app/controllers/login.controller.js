const db = require("../models");
const User = db.User;
require("dotenv").config();
const hashMethod = require(process.env.HASH_METHOD);
const saltRounds = Number(process.env.SALT_ROUNDS);

exports.loginPage = (req, res) => {
  res.render("login");
};

exports.userLogin = (req, res) => {
  credentials = {
    username: req.body.username,
    password: hashMethod.hashSync(req.body.password, saltRounds),
  };
  User.findOne({ email: credentials.username })
    .then((userData) => {
      if (userData) {
        if (credentials.password === userData.password) {
          res.render("secrets");
        }
      }
    })
    .catch((err) => console.log(err));
};
