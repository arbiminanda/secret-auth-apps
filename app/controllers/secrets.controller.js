const db = require("../models");
const User = db.User;

exports.secretsPage = (req, res) => {
  if (req.isAuthenticated()) {
    User.findById(req.user.id).then((user) => {
      var secretValue = "";
      if (user.secret) {
        secretValue = user.secret;
      } else {
        secretValue = "You have no secret";
      }
      res.render("secrets", { secretValue: secretValue });
    });
  } else {
    res.redirect("login");
  }
};
