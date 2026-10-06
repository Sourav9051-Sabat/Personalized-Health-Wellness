const Workout = require("../models/Workout");

const WorkoutTracking = require("../models/WorkoutTracking");

const getProgress = async (req, res) => {

    try {

        const workouts = await Workout.find({

            user: req.user.id

        });

        const tracking = await WorkoutTracking.find({

            user: req.user.id,

            completed: true

        });

        const workoutIds = workouts.map(

            (workout) => workout._id.toString()

        );

        const completedWorkouts = tracking.filter(

            (item) => workoutIds.includes(item.workout.toString())

        ).length;

        const totalWorkouts = workouts.length;

        const pendingWorkouts = Math.max(

            totalWorkouts - completedWorkouts,

            0

        );

        let completionPercentage = 0;

        if (totalWorkouts > 0) {

            completionPercentage = Math.round(

                (completedWorkouts / totalWorkouts) * 100

            );

        }

        res.json({

            message: "Progress fetched successfully",

            totalWorkouts: totalWorkouts,

            completedWorkouts: completedWorkouts,

            pendingWorkouts: pendingWorkouts,

            completionPercentage: completionPercentage

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

    getProgress

};