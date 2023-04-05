const db = require("../models");
const User = db.User;

exports.submitPage = (req, res) => {
  if (req.isAuthenticated()) {
    res.render("submit");
  } else {
    res.redirect("login");
  }
};

exports.submitSecret = (req, res) => {
  if (req.isAuthenticated()) {
    const submittedSecret = req.body.secret;
    User.findById(req.user.id).then((user) => {
      user.secret = submittedSecret;
      user.save().then(() => {
        res.redirect("/secrets");
      });
    });
  } else {
    res.redirect("login");
  }
};
