const PickUpRequest = require("../models/PickUpRequest");

exports.createPickUpRequest = async (pickUpRequestData) => {
  const pickUpRequest = new PickUpRequest(pickUpRequestData);
  await pickUpRequest.save();
  return pickUpRequest;
};

exports.getPickUpRequests = async (userId) => {
  return await PickUpRequest.find({ user: userId });
};
