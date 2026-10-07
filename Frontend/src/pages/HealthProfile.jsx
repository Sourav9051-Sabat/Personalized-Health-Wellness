import { useEffect, useState } from "react";

import axios from "axios";

function HealthProfile() {

    const [name, setName] = useState("");

    const [age, setAge] = useState("");

    const [gender, setGender] = useState("");

    const [height, setHeight] = useState("");

    const [weight, setWeight] = useState("");

    const [fitnessGoal, setFitnessGoal] = useState("");

    const [activityLevel, setActivityLevel] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    useEffect(() => {

        const getProfile = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await axios.get(

                    "https://personalized-health-wellness-backend.onrender.com/api/auth/profile",

                    {

                        headers: {

                            Authorization: `Bearer ${token}`

                        }

                    }

                );

                setName(response.data.user.name);

            }

            catch (err) {

                console.log(err);

            }

        };

        getProfile();

    }, []);

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        setLoading(true);

        try {

            const token = localStorage.getItem("token");

            const response = await axios.post(

                "https://personalized-health-wellness-backend.onrender.com/api/health/",

                {

                    name: name,

                    age: age,

                    gender: gender,

                    height: height,

                    weight: weight,

                    fitnessGoal: fitnessGoal,

                    activityLevel: activityLevel

                },

                {

                    headers: {

                        Authorization: `Bearer ${token}`

                    }

                }

            );

            alert(response.data.message);

        }

        catch (err) {

            if (err.response) {

                setError(

                    err.response.data.message || "Health profile failed"

                );

            }

            else if (err.request) {

                setError(

                    "Unable to connect to server. Please try again."

                );

            }

            else {

                setError(

                    "Something went wrong. Please try again."

                );

            }

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="profile-page">

            <div className="profile-header">

                <div>

                    <p className="profile-label">

                        HEALTH PROFILE

                    </p>

                    <h1>Personal Information</h1>

                    <p className="profile-subtitle">

                        Complete your profile to get a wellness plan designed around you.

                    </p>

                </div>

                <div className="profile-progress">

                    <span>Profile Setup</span>

                    <strong>1 of 1</strong>

                    <div className="progress-line">

                        <div></div>

                    </div>

                </div>

            </div>

            <div className="profile-layout">

                <div className="profile-sidebar">

                    <div className="sidebar-icon">

                        +

                    </div>

                    <h2>

                        Let's personalize your wellness journey.

                    </h2>

                    <p>

                        A few details about you help us create workouts that

                        better match your goals and lifestyle.

                    </p>

                    <div className="sidebar-feature">

                        <div className="feature-icon">

                            ✓

                        </div>

                        <div>

                            <strong>Personalized Workouts</strong>

                            <span>

                                Plans based on your fitness goal

                            </span>

                        </div>

                    </div>

                    <div className="sidebar-feature">

                        <div className="feature-icon">

                            ✓

                        </div>

                        <div>

                            <strong>Progress Tracking</strong>

                            <span>

                                Monitor your consistency over time

                            </span>

                        </div>

                    </div>

                    <div className="sidebar-feature">

                        <div className="feature-icon">

                            ✓

                        </div>

                        <div>

                            <strong>Better Recommendations</strong>

                            <span>

                                Recommendations based on your profile

                            </span>

                        </div>

                    </div>

                </div>

                <div className="profile-form-card">

                    <div className="profile-form-header">

                        <h2>Your Details</h2>

                        <p>

                            Enter your information below. This helps us personalize

                            your wellness experience.

                        </p>

                    </div>

                    {error && (

                        <div className="auth-error">

                            {error}

                        </div>

                    )}

                    <form onSubmit={handleSubmit}>

                        <div className="form-section">

                            <h3>Basic Information</h3>

                            <div className="form-grid">

                                <div className="profile-form-group full-width">

                                    <label>Full Name</label>

                                    <input

                                        type="text"

                                        value={name}

                                        placeholder="Your full name"

                                        onChange={(e) => setName(e.target.value)}

                                        required

                                    />

                                </div>

                                <div className="profile-form-group">

                                    <label>Age</label>

                                    <input

                                        type="number"

                                        min="1"

                                        placeholder="Enter your age"

                                        value={age}

                                        onChange={(e) => setAge(e.target.value)}

                                        required

                                    />

                                </div>

                                <div className="profile-form-group">

                                    <label>Gender</label>

                                    <select

                                        value={gender}

                                        onChange={(e) => setGender(e.target.value)}

                                        required

                                    >

                                        <option value="">

                                            Select gender

                                        </option>

                                        <option value="Male">

                                            Male

                                        </option>

                                        <option value="Female">

                                            Female

                                        </option>

                                        <option value="Other">

                                            Other

                                        </option>

                                    </select>

                                </div>

                            </div>

                        </div>

                        <div className="form-divider"></div>

                        <div className="form-section">

                            <h3>Body Measurements</h3>

                            <div className="form-grid">

                                <div className="profile-form-group">

                                    <label>Height</label>

                                    <div className="unit-input">

                                        <input

                                            type="number"

                                            min="1"

                                            placeholder="Enter height"

                                            value={height}

                                            onChange={(e) => setHeight(e.target.value)}

                                            required

                                        />

                                        <span>cm</span>

                                    </div>

                                </div>

                                <div className="profile-form-group">

                                    <label>Weight</label>

                                    <div className="unit-input">

                                        <input

                                            type="number"

                                            min="1"

                                            placeholder="Enter weight"

                                            value={weight}

                                            onChange={(e) => setWeight(e.target.value)}

                                            required

                                        />

                                        <span>kg</span>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="form-divider"></div>

                        <div className="form-section">

                            <h3>Fitness Preferences</h3>

                            <div className="form-grid">

                                <div className="profile-form-group">

                                    <label>Fitness Goal</label>

                                    <select

                                        value={fitnessGoal}

                                        onChange={(e) => setFitnessGoal(e.target.value)}

                                        required

                                    >

                                        <option value="">

                                            Select your goal

                                        </option>

                                        <option value="Muscle Gain">

                                            Muscle Gain

                                        </option>

                                        <option value="Weight Loss">

                                            Weight Loss

                                        </option>

                                        <option value="General Fitness">

                                            General Fitness

                                        </option>

                                    </select>

                                </div>

                                <div className="profile-form-group">

                                    <label>Activity Level</label>

                                    <select

                                        value={activityLevel}

                                        onChange={(e) => setActivityLevel(e.target.value)}

                                        required

                                    >

                                        <option value="">

                                            Select activity level

                                        </option>

                                        <option value="Low">

                                            Low

                                        </option>

                                        <option value="Moderate">

                                            Moderate

                                        </option>

                                        <option value="High">

                                            High

                                        </option>

                                    </select>

                                </div>

                            </div>

                        </div>

                        <div className="profile-form-bottom">

                            <p>

                                All fields are required to generate your personalized plan.

                            </p>

                            <button

                                type="submit"

                                className="save-profile-button"

                                disabled={loading}

                            >

                                {loading

                                    ? "Saving Profile..."

                                    : "Save Health Profile"

                                }

                                {!loading && <span> →</span>}

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default HealthProfile;

