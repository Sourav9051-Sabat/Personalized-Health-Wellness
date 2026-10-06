const express = require("express");

const router = express.Router();

const { trackWorkout, getWorkoutTracking } = require("../controllers/workoutTrackingController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, trackWorkout);

router.get("/", authMiddleware, getWorkoutTracking);

module.exports = router;