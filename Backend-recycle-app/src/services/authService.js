const User = require("../models/User");

exports.register = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

exports.login = async (loginData) => {
  const { email, password } = loginData;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    return user;
  } else {
    throw new Error("Invalid email or password");
  }
};
