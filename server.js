const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const db = require("./app/models");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

db.mongoose.connect(db.url, {
  useNewUrlParser: true,
});

require("./app/routes/home.routes")(app);
require("./app/routes/login.routes")(app);
require("./app/routes/register.routes")(app);

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
