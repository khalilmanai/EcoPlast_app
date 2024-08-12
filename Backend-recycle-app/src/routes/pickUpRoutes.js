const express = require("express");
const {
  createPickUpRequest,
  getPickUpRequests,
} = require("../controllers/pickUpController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createPickUpRequest);
router.get("/:userId", authMiddleware, getPickUpRequests);

module.exports = router;
