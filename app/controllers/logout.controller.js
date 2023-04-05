exports.signOut = (req, res) => {
  req.logout(function () {
    res.redirect("/");
  });
};
