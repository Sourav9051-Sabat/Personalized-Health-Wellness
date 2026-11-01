
const HealthProfile = require("../models/HealthProfile");

// Create health profile
const createHealthProfile = async (req, res) => {
    try {
        const existingProfile = await HealthProfile.findOne({
            user: req.user.id
        });

        if (existingProfile) {
            return res.status(400).json({
                message: "Health profile already exists"
            });
        }

        const {
            age,
            gender,
            height,
            weight,
            fitnessGoal,
            activityLevel
        } = req.body;

        const healthProfile = await HealthProfile.create({
            user: req.user.id,
            age,
            gender,
            height,
            weight,
            fitnessGoal,
            activityLevel
        });

        res.status(201).json({
            message: "Health profile created successfully",
            healthProfile
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


// Get health profile
const getHealthProfile = async (req, res) => {
    try {
        const healthProfile = await HealthProfile.findOne({
            user: req.user.id
        });

        if (!healthProfile) {
            return res.status(404).json({
                message: "Health profile not found"
            });
        }

        res.status(200).json({
            message: "Health profile fetched successfully",
            healthProfile
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


// Update health profile
const updateHealthProfile = async (req, res) => {
    try {
        const {
            age,
            gender,
            height,
            weight,
            fitnessGoal,
            activityLevel
        } = req.body;

        const healthProfile = await HealthProfile.findOneAndUpdate(
            { user: req.user.id },
            {
                age,
                gender,
                height,
                weight,
                fitnessGoal,
                activityLevel
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!healthProfile) {
            return res.status(404).json({
                message: "Health profile not found"
            });
        }

        res.status(200).json({
            message: "Health profile updated successfully",
            healthProfile
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


// Delete health profile
const deleteHealthProfile = async (req, res) => {
    try {
        const healthProfile = await HealthProfile.findOneAndDelete({
            user: req.user.id
        });

        if (!healthProfile) {
            return res.status(404).json({
                message: "Health profile not found"
            });
        }

        res.status(200).json({
            message: "Health profile deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


module.exports = {
    createHealthProfile,
    getHealthProfile,
    updateHealthProfile,
    deleteHealthProfile
};
