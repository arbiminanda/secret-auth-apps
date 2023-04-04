module.exports = (app) => {
  const login = require("../controllers/login.controller");
  const r = require("express").Router();

  r.get("/", login.loginPage);

  app.use("/login", r);
};
