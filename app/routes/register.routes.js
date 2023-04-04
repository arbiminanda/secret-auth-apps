module.exports = (app) => {
  const register = require("../controllers/register.controller");
  const r = require("express").Router();

  r.route("/").get(register.registerPage).post(register.createUser);

  app.use("/register", r);
};
