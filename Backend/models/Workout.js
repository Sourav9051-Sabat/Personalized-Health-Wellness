const mongoose = require("mongoose");
const workoutSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    day: {
        type: String,
        required: true
    },

    workoutName: {
        type: String,
        required: true
    },

    exercises: [

        {

            name: {

                type: String,
                required: true

            },

            sets: {

                type: Number,
                required: true

            },

            reps: {

                type: Number,
                required: true

            }

        }

    ]

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;