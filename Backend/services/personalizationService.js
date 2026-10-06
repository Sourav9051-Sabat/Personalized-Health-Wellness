const generateWorkoutPlan = (healthProfile) => {

    const { fitnessGoal, activityLevel } = healthProfile;

    let workoutPlan = {};

    if (fitnessGoal === "Muscle Gain") {

        workoutPlan = {
            workoutType: "Strength Training",
            daysPerWeek: 4,
            duration: 60,
            focus: "Muscle Building"

        };

    }

    else if (fitnessGoal === "Weight Loss") {

        workoutPlan = {
            workoutType: "Cardio + Strength Training",
            daysPerWeek: 5,
            duration: 45,
            focus: "Fat Loss"

        };

    }

    else if (fitnessGoal === "General Fitness") {

        workoutPlan = {
            workoutType: "Full Body Training",
            daysPerWeek: 3,
            duration: 45,
            focus: "Overall Fitness"
        };

    }

    else {

        workoutPlan = {
            workoutType: "General Workout",
            daysPerWeek: 3,
            duration: 45,
            focus: "Fitness"
        };

    }

    if (activityLevel === "Low") {
        workoutPlan.daysPerWeek = Math.min(workoutPlan.daysPerWeek, 3);
    }
    return workoutPlan;

};

module.exports = {
    generateWorkoutPlan

};
