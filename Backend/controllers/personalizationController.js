const HealthProfile = require("../models/HealthProfile");
const { generateWorkoutPlan } = require("../services/personalizationService");

const getPersonalizedPlan = async (req, res) => {
    try {

        const healthProfile = await HealthProfile.findOne({
            user: req.user.id

        });

        if (!healthProfile) {
            return res.status(404).json({
                message: "Health profile not found"
            });

        }

        const workoutPlan = generateWorkoutPlan(healthProfile);

        res.json({
            message: "Personalized workout plan generated successfully",
            healthProfile: healthProfile,
            workoutPlan: workoutPlan
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
    getPersonalizedPlan

};