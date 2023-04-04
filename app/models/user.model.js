module.exports = (mongoose) => {
  const userSchema = mongoose.Schema({
    email: String,
    password: String,
  });
  return mongoose.model("User", userSchema);
};
