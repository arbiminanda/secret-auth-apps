module.exports = (app) => {
  const register = require("../controllers/register.controller");
  const r = require("express").Router();

  r.get("/", register.registerPage);

  app.use("/register", r);
};
