// const encrypt = require("mongoose-encryption");
// require("dotenv").config();

module.exports = (mongoose) => {
  const userSchema = mongoose.Schema({
    email: String,
    password: String,
  });
  //   const secret = process.env.SECRET_KEY;
  //   userSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });
  return mongoose.model("User", userSchema);
};
