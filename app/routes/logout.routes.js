module.exports = (app) => {
  const logout = require("../controllers/logout.controller");
  const r = require("express").Router();

  r.get("", logout.signOut);

  app.use("/logout", r);
};
