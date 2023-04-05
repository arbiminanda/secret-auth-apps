const passport = require("passport");

module.exports = (app) => {
  const secrets = require("../../controllers/google-auth/secrets.controller");
  const r = require("express").Router();

  r.get(
    "",
    passport.authenticate("google", { failureRedirect: "/login" }),
    secrets.secretsPage
  );

  app.use("/auth/google/secrets", r);
};
