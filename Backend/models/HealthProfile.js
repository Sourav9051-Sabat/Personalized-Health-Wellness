const mongoose = require("mongoose");
const healthProfileSchema = new mongoose.Schema({

    user: {

        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true

    },

    age: {
        type: Number,
        required: true

    },

    gender: {
        type: String,
        required: true

    },

    height: {

        type: Number,
        required: true

    },

    weight: {

        type: Number,
        required: true

    },

    fitnessGoal: {

        type: String,
        required: true

    },

    activityLevel: {
        type: String,
        required: true
    }

});

const HealthProfile = mongoose.model("HealthProfile", healthProfileSchema);

module.exports = HealthProfile;