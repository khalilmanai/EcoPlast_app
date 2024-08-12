const DropOff = require("../models/DropOff");

exports.createDropOff = async (dropOffData) => {
  const dropOff = new DropOff(dropOffData);
  await dropOff.save();
  return dropOff;
};

exports.getDropOffs = async (userId) => {
  return await DropOff.find({ user: userId });
};
