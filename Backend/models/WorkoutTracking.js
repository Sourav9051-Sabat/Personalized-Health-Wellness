const mongoose = require("mongoose");
const workoutTrackingSchema = new mongoose.Schema({

    user: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true

    },

    workout: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workout",
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    completed: {
        type: Boolean,
        default: false
    }

});

const WorkoutTracking = mongoose.model("WorkoutTracking", workoutTrackingSchema);

module.exports = WorkoutTracking;