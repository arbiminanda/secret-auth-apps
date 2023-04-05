const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

module.exports = (mongoose) => {
  const userSchema = mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
  });
  userSchema.plugin(passportLocalMongoose);
  userSchema.plugin(findOrCreate);
  return mongoose.model("User", userSchema);
};
