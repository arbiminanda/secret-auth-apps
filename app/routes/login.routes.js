module.exports = (app) => {
  const login = require("../controllers/login.controller");
  const r = require("express").Router();

  r.route("/").get(login.loginPage).post(login.userLogin);

  app.use("/login", r);
};
