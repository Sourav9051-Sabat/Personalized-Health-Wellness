const WorkoutTracking = require("../models/WorkoutTracking");

const trackWorkout = async (req, res) => {

    try {

        const { workout, completed } = req.body;

        const existingTracking = await WorkoutTracking.findOne({

            user: req.user.id,

            workout: workout

        });

        if (existingTracking) {

            existingTracking.completed = completed;

            await existingTracking.save();

            return res.json({

                message: "Workout tracking updated successfully",

                tracking: existingTracking

            });

        }

        const tracking = new WorkoutTracking({

            user: req.user.id,

            workout: workout,

            completed: completed

        });

        await tracking.save();

        res.status(201).json({

            message: "Workout tracking saved successfully",

            tracking: tracking

        });

    }

    catch (err) {

        res.status(500).json({

            message: "Server error",

            error: err.message

        });

    }

};

const getWorkoutTracking = async (req, res) => {

    try {

        const tracking = await WorkoutTracking.find({

            user: req.user.id

        });

        res.json({

            message: "Workout tracking fetched successfully",

            tracking: tracking

        });

    }

    catch (err) {

        res.status(500).json({

            message: "Server error",

            error: err.message

        });

    }

};

module.exports = {

    trackWorkout,

    getWorkoutTracking

};