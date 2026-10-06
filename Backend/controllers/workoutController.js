const Workout = require("../models/Workout");
const createWorkout = async (req, res) => {

    try {
        const { day, workoutName, exercises } = req.body;
        const workout = new Workout({
            user: req.user.id,
            day: day,
            workoutName: workoutName,
            exercises: exercises
        });

        await workout.save();
        res.status(201).json({
            message: "Workout created successfully",
            workout: workout
        });

    }

    catch (err) {
        res.status(500).json({
            message: "Server error",
            error: err.message
        });
    }
};

const getWorkouts = async (req, res) => {

    try {
        const workouts = await Workout.find({
            user: req.user.id
        });
        res.json({
            message: "Workouts fetched successfully",
            workouts: workouts
        });
    }

    catch (err) {

        res.status(500).json({
            message: "Server error",
            error: err.message
        });
    }
};

const updateWorkout = async (req, res) => {

    try {
        const { day, workoutName, exercises } = req.body;
        const workout = await Workout.findOneAndUpdate(
            {
                _id: req.params.id,                
               user: req.user.id
            },

            {
                day: day,
                workoutName: workoutName,
                exercises: exercises
            },

            { returnDocument: "after" }

        );
        if (!workout) {
            return res.status(404).json({
                message: "Workout not found"
            });

        }
        res.json({
            message: "Workout updated successfully",
            workout: workout
        });

    }
    catch (err) {
        res.status(500).json({
            message: "Server error",
            error: err.message
        });
    }

};

const deleteWorkout = async (req, res) => {

    try {
        const workout = await Workout.findOneAndDelete ({
            _id: req.params.id,
            user: req.user.id

        });

        if (!workout) {
            return res.status(404).json({
                message: "Workout not found"
            });
        }
        res.json({
            message: "Workout deleted successfully"
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
    createWorkout,
    getWorkouts,
    updateWorkout,
    deleteWorkout
};