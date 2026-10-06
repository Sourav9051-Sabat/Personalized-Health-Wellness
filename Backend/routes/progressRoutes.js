const express = require("express");

const router = express.Router();

const { getProgress } = require("../controllers/progressController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getProgress);

module.exports = router;