const mongoose = require("mongoose");

const pickUpRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["En attente", "accomplis"],
    default: "En attente",
  },
});

module.exports = mongoose.model("PickUpRequest", pickUpRequestSchema);
