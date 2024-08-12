const express = require("express");
const {
  createDropOff,
  getDropOffs,
} = require("../controllers/dropOffController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createDropOff);
router.get("/:userId", authMiddleware, getDropOffs);

module.exports = router;
