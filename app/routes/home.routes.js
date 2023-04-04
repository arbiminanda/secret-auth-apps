module.exports = (app) => {
  const home = require("../controllers/home.controller");
  const r = require("express").Router();

  r.get("", home.homePage);

  app.use("/", r);
};
