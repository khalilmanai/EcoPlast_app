const mongoose = require("mongoose");

const dropOffSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("DropOff", dropOffSchema);
