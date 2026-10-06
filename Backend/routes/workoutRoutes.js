const express = require("express");

const router = express.Router();

const { createWorkout, getWorkouts, updateWorkout, deleteWorkout } = require("../controllers/workoutController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createWorkout);

router.get("/", authMiddleware, getWorkouts);

router.put("/:id", authMiddleware, updateWorkout);

router.delete("/:id", authMiddleware, deleteWorkout);

module.exports = router;