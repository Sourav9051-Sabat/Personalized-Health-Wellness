const express = require("express");

const router = express.Router();

const { getPersonalizedPlan } = require("../controllers/personalizationController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getPersonalizedPlan);

module.exports = router;