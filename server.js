const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const db = require("./app/models");
const passport = require("passport");
const session = require("express-session");
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
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());

require("./app/routes/home.routes")(app);
require("./app/routes/login.routes")(app);
require("./app/routes/register.routes")(app);
require("./app/routes/secrets.routes")(app);
require("./app/routes/logout.routes")(app);

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
