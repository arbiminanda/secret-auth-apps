const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const db = require("./app/models");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

db.mongoose.connect(db.url, {
  useNewUrlParser: true,
});

passport.use(db.User.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  db.User.findById(id).then((user) => done(null, user));
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.BASE_URL + "/auth/google/secrets",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    function (accessToken, refreshToken, profile, cb) {
      db.User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

require("./app/routes/home.routes")(app);
require("./app/routes/login.routes")(app);
require("./app/routes/register.routes")(app);
require("./app/routes/secrets.routes")(app);
require("./app/routes/logout.routes")(app);
require("./app/routes/google-auth/auth.routes")(app);
require("./app/routes/google-auth/secrets.routes")(app);
require("./app/routes/submit.routes")(app);

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
