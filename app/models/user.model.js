// const encrypt = require("mongoose-encryption");
// require("dotenv").config();
const passportLocalMongoose = require("passport-local-mongoose");

module.exports = (mongoose) => {
  const userSchema = mongoose.Schema({
    email: String,
    password: String,
  });
  userSchema.plugin(passportLocalMongoose);
  return mongoose.model("User", userSchema);
};
