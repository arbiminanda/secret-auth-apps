const encrypt = require("mongoose-encryption");

module.exports = (mongoose) => {
  const userSchema = mongoose.Schema({
    email: String,
    password: String,
  });
  const secret = "ThisIsMySecret";
  userSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });
  return mongoose.model("User", userSchema);
};
