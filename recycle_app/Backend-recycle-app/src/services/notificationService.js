const notificationModel = require("../models/notification");

exports.createNotification = async (notificationData) => {
  try {
    const notification = new notificationModel(notificationData);
    await notification.save();
    return notification;
  } catch (error) {
    console.error("Error creating notification : ", error);
    throw error;
  }
};
