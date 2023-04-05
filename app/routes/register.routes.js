const session = require("express-session");
const passport = require("passport");

module.exports = (app) => {
  app.use(
    session({
      secret: "GFSfuf786fgTF876BUFYhgjhg57676",
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  const register = require("../controllers/register.controller");
  const r = require("express").Router();

  r.route("/").get(register.registerPage).post(register.createUser);

  app.use("/register", r);
};
