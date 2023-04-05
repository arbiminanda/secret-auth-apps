const passport = require("passport");

module.exports = (app) => {
  const r = require("express").Router();

  r.get("", passport.authenticate("google", { scope: ["profile"] }));

  app.use("/auth/google", r);
};
