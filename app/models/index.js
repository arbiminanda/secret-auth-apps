const mongoose = require("mongoose");
const dbConfig = require("../config/database");

module.exports = {
  mongoose,
  url: dbConfig.url,
  User: require("./user.model.js")(mongoose),
};
