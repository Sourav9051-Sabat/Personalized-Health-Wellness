import { useEffect, useState } from "react";

import axios from "axios";

function Dashboard() {

    const [plan, setPlan] = useState(null);

    const [progress, setProgress] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        const getDashboardData = async () => {

            try {

                const token = localStorage.getItem("token");

                const planResponse = await axios.get(

                    "https://personalized-health-wellness-backend.onrender.com/api/personalization/",

                    {

                        headers: {

                            Authorization: `Bearer ${token}`

                        }

                    }

                );

                setPlan(planResponse.data.workoutPlan);

                const progressResponse = await axios.get(

                    "https://personalized-health-wellness-backend.onrender.com/api/progress/",

                    {

                        headers: {

                            Authorization: `Bearer ${token}`

                        }

                    }

                );

                setProgress(progressResponse.data);

            }

            catch (err) {

                setError(

                    err.response?.data?.message ||

                    "Failed to load dashboard data"

                );

            }

            finally {

                setLoading(false);

            }

        };

        getDashboardData();

    }, []);

    return (

        <div className="dashboard">

            <div className="dashboard-header">

                <div>

                    <p className="dashboard-label">

                        HEALTH & WELLNESS

                    </p>

                    <h1>My Dashboard</h1>

                    <p>

                        Track your fitness journey and follow your personalized plan.

                    </p>

                </div>

            </div>

            {error && (

                <p className="error-message">

                    {error}

                </p>

            )}

            {loading ? (

                <div className="dashboard-loading">

                    <p>Loading your dashboard...</p>

                </div>

            ) : (

                <>

                    <div className="progress-section">

                        <div className="dashboard-section-header">

                            <div>

                                <p className="section-label">

                                    YOUR ACTIVITY

                                </p>

                                <h2>My Progress</h2>

                            </div>

                            <span className="completion-badge">

                                {progress?.completionPercentage || 0}% Complete

                            </span>

                        </div>

                        <div className="progress-cards">

                            <div className="progress-card">

                                <span className="progress-card-label">

                                    Total Workouts

                                </span>

                                <strong>

                                    {progress?.totalWorkouts || 0}

                                </strong>

                                <p>

                                    Workouts in your plan

                                </p>

                            </div>

                            <div className="progress-card">

                                <span className="progress-card-label">

                                    Completed

                                </span>

                                <strong>

                                    {progress?.completedWorkouts || 0}

                                </strong>

                                <p>

                                    Workouts completed

                                </p>

                            </div>

                            <div className="progress-card">

                                <span className="progress-card-label">

                                    Pending

                                </span>

                                <strong>

                                    {progress?.pendingWorkouts || 0}

                                </strong>

                                <p>

                                    Workouts remaining

                                </p>

                            </div>

                            <div className="progress-card">

                                <span className="progress-card-label">

                                    Completion

                                </span>

                                <strong>

                                    {progress?.completionPercentage || 0}%

                                </strong>

                                <p>

                                    Overall progress

                                </p>

                            </div>

                        </div>

                        <div className="dashboard-progress-bar">

                            <div

                                className="dashboard-progress-fill"

                                style={{

                                    width: `${progress?.completionPercentage || 0}%`

                                }}

                            >

                            </div>

                        </div>

                    </div>

                    <div className="plan-section">

                        <div className="dashboard-section-header">

                            <div>

                                <p className="section-label">

                                    PERSONALIZED PLAN

                                </p>

                                <h2>Your Workout Plan</h2>

                            </div>

                        </div>

                        {plan ? (

                            <div className="plan-card">

                                <div className="plan-card-item">

                                    <span>Workout Type</span>

                                    <strong>

                                        {plan.workoutType}

                                    </strong>

                                </div>

                                <div className="plan-card-item">

                                    <span>Days Per Week</span>

                                    <strong>

                                        {plan.daysPerWeek}

                                    </strong>

                                </div>

                                <div className="plan-card-item">

                                    <span>Duration</span>

                                    <strong>

                                        {plan.duration} minutes

                                    </strong>

                                </div>

                                <div className="plan-card-item">

                                    <span>Focus</span>

                                    <strong>

                                        {plan.focus}

                                    </strong>

                                </div>

                            </div>

                        ) : (

                            <p>

                                No personalized workout plan available.

                            </p>

                        )}

                    </div>

                </>

            )}

        </div>

    );

}

export default Dashboard;



