const HealthProfile = require("../models/HealthProfile");
const createHealthProfile = async (req, res) => {

    try {

        const { age, gender, height, weight, fitnessGoal, activityLevel } = req.body;
        const healthProfile = new HealthProfile({

            user: req.user.id,
            age: age,
            gender: gender,
            height: height,
            weight: weight,
            fitnessGoal: fitnessGoal,
            activityLevel: activityLevel
        });

        await healthProfile.save();
        res.status(201).json({
            message: "Health profile created successfully",
            healthProfile: healthProfile

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
    createHealthProfile
};