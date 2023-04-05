module.exports = (app) => {
  const secrets = require("../controllers/secrets.controller");
  const r = require("express").Router();

  r.get("", secrets.secretsPage);

  app.use("/secrets", r);
};
