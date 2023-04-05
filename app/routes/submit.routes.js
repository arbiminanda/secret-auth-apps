module.exports = (app) => {
  const submit = require("../controllers/submit.controller");
  const r = require("express").Router();

  r.route("/").get(submit.submitPage).post(submit.submitSecret);

  app.use("/submit", r);
};
