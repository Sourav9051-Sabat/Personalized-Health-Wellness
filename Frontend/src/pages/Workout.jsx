import { useEffect, useState } from "react";

import axios from "axios";

function Workout() {

    const [day, setDay] = useState("");

    const [workoutName, setWorkoutName] = useState("");

    const [exerciseName, setExerciseName] = useState("");

    const [sets, setSets] = useState("");

    const [reps, setReps] = useState("");

    const [workouts, setWorkouts] = useState([]);

    const [completedWorkouts, setCompletedWorkouts] = useState([]);

    const [editId, setEditId] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const [loadingWorkouts, setLoadingWorkouts] = useState(true);

    const handleTracking = async (id) => {

        try {

            const token = localStorage.getItem("token");

            const response = await axios.post(

                "http://localhost:8080/api/workout-tracking/",

                {

                    workout: id,

                    completed: true

                },

                {

                    headers: {

                        Authorization: `Bearer ${token}`

                    }

                }

            );

            setCompletedWorkouts([

                ...completedWorkouts,

                id

            ]);

            alert(response.data.message);

        }

        catch (err) {

            alert(err.response?.data?.message || "Workout tracking failed");

        }

    };

    useEffect(() => {

        const getWorkouts = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await axios.get(

                    "http://localhost:8080/api/workouts/",

                    {

                        headers: {

                            Authorization: `Bearer ${token}`

                        }

                    }

                );

                setWorkouts(response.data.workouts);

            }

            catch (err) {

                setError(

                    err.response?.data?.message || "Failed to load workouts"

                );

            }

            finally {

                setLoadingWorkouts(false);

            }

        };

        getWorkouts();

    }, []);

    useEffect(() => {

        const getTracking = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await axios.get(

                    "http://localhost:8080/api/workout-tracking/",

                    {

                        headers: {

                            Authorization: `Bearer ${token}`

                        }

                    }

                );

                const completedIds = response.data.tracking

                    .filter((item) => item.completed === true)

                    .map((item) => item.workout);

                setCompletedWorkouts(completedIds);

            }

            catch (err) {

                console.log(err);

            }

        };

        getTracking();

    }, []);

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        setLoading(true);

        try {

            const token = localStorage.getItem("token");

            if (editId) {

                const response = await axios.put(

                    `http://localhost:8080/api/workouts/${editId}`,

                    {

                        day: day,

                        workoutName: workoutName,

                        exercises: [

                            {

                                name: exerciseName,

                                sets: sets,

                                reps: reps

                            }

                        ]

                    },

                    {

                        headers: {

                            Authorization: `Bearer ${token}`

                        }

                    }

                );

                alert(response.data.message);

                setWorkouts(

                    workouts.map((workout) =>

                        workout._id === editId

                            ? response.data.workout

                            : workout

                    )

                );

                setEditId(null);

            }

            else {

                const response = await axios.post(

                    "http://localhost:8080/api/workouts/",

                    {

                        day: day,

                        workoutName: workoutName,

                        exercises: [

                            {

                                name: exerciseName,

                                sets: sets,

                                reps: reps

                            }

                        ]

                    },

                    {

                        headers: {

                            Authorization: `Bearer ${token}`

                        }

                    }

                );

                alert(response.data.message);

                setWorkouts([...workouts, response.data.workout]);

            }

            setDay("");

            setWorkoutName("");

            setExerciseName("");

            setSets("");

            setReps("");

        }

        catch (err) {

            setError(

                err.response?.data?.message || "Workout operation failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    const handleEdit = (workout) => {

        setEditId(workout._id);

        setDay(workout.day);

        setWorkoutName(workout.workoutName);

        setExerciseName(workout.exercises[0].name);

        setSets(workout.exercises[0].sets);

        setReps(workout.exercises[0].reps);

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

    const handleDelete = async (id) => {

        try {

            const token = localStorage.getItem("token");

            await axios.delete(

                `http://localhost:8080/api/workouts/${id}`,

                {

                    headers: {

                        Authorization: `Bearer ${token}`

                    }

                }

            );

            setWorkouts(

                workouts.filter((workout) => workout._id !== id)

            );

            setCompletedWorkouts(

                completedWorkouts.filter((workoutId) => workoutId !== id)

            );

            alert("Workout deleted successfully");

        }

        catch (err) {

            alert(err.response?.data?.message || "Workout deletion failed");

        }

    };

    return (

        <div className="workout-page">

            <div className="workout-header">

                <div>

                    <p className="workout-label">

                        WORKOUT MANAGEMENT

                    </p>

                    <h1>Build Your Workout Plan</h1>

                    <p className="workout-subtitle">

                        Create and manage structured workouts designed around your fitness goals.

                    </p>

                </div>

                <div className="workout-summary">

                    <span>Total Workouts</span>

                    <strong>{workouts.length}</strong>

                </div>

            </div>

            {error && (

                <p className="error-message">

                    {error}

                </p>

            )}

            <div className="workout-container">

                <div className="workout-form-card">

                    <div className="workout-form-header">

                        <div className="workout-form-icon">

                            +

                        </div>

                        <div>

                            <h2>

                                {editId ? "Update Workout" : "Create Workout"}

                            </h2>

                            <p>

                                {editId

                                    ? "Update your workout details below."

                                    : "Add a new workout to your personal plan."

                                }

                            </p>

                        </div>

                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className="workout-form-section">

                            <h3>Workout Information</h3>

                            <div className="professional-form-group">

                                <label>Workout Day</label>

                                <select

                                    value={day}

                                    onChange={(e) => setDay(e.target.value)}

                                    required

                                >

                                    <option value="">

                                        Select workout day

                                    </option>

                                    <option value="Monday">

                                        Monday

                                    </option>

                                    <option value="Tuesday">

                                        Tuesday

                                    </option>

                                    <option value="Wednesday">

                                        Wednesday

                                    </option>

                                    <option value="Thursday">

                                        Thursday

                                    </option>

                                    <option value="Friday">

                                        Friday

                                    </option>

                                    <option value="Saturday">

                                        Saturday

                                    </option>

                                    <option value="Sunday">

                                        Sunday

                                    </option>

                                </select>

                            </div>

                            <div className="professional-form-group">

                                <label>Workout Name</label>

                                <input

                                    type="text"

                                    placeholder="Example: Chest & Triceps"

                                    value={workoutName}

                                    onChange={(e) => setWorkoutName(e.target.value)}

                                    required

                                />

                            </div>

                        </div>

                        <div className="workout-form-divider"></div>

                        <div className="workout-form-section">

                            <h3>Exercise Details</h3>

                            <div className="professional-form-group">

                                <label>Exercise Name</label>

                                <input

                                    type="text"

                                    placeholder="Example: Bench Press"

                                    value={exerciseName}

                                    onChange={(e) => setExerciseName(e.target.value)}

                                    required

                                />

                            </div>

                            <div className="professional-form-row">

                                <div className="professional-form-group">

                                    <label>Sets</label>

                                    <input

                                        type="number"

                                        min="1"

                                        placeholder="3"

                                        value={sets}

                                        onChange={(e) => setSets(e.target.value)}

                                        required

                                    />

                                </div>

                                <div className="professional-form-group">

                                    <label>Reps</label>

                                    <input

                                        type="number"

                                        min="1"

                                        placeholder="12"

                                        value={reps}

                                        onChange={(e) => setReps(e.target.value)}

                                        required

                                    />

                                </div>

                            </div>

                        </div>

                        <div className="workout-form-footer">

                            <button

                                type="submit"

                                className="workout-submit-button"

                                disabled={loading}

                            >

                                {loading

                                    ? "Saving Workout..."

                                    : editId

                                        ? "Update Workout"

                                        : "Create Workout"

                                }

                                {!loading && <span>→</span>}

                            </button>

                        </div>

                    </form>

                </div>

                <div className="workout-list-section">

                    <div className="workout-list-header">

                        <div>

                            <p className="section-label">

                                YOUR PLAN

                            </p>

                            <h2>My Workouts</h2>

                            <p>

                                Manage your scheduled workouts and track completion.

                            </p>

                        </div>

                    </div>

                    {loadingWorkouts ? (

                        <p>Loading your workouts...</p>

                    ) : workouts.length === 0 ? (

                        <div className="professional-empty-workout">

                            <div className="empty-workout-icon">

                                +

                            </div>

                            <h3>No workouts created yet</h3>

                            <p>

                                Use the form to create your first personalized workout.

                            </p>

                        </div>

                    ) : (

                        <div className="professional-workout-cards">

                            {workouts.map((workout) => (

                                <div

                                    className="professional-workout-card"

                                    key={workout._id}

                                >

                                    <div className="professional-workout-top">

                                        <span className="workout-day-badge">

                                            {workout.day}

                                        </span>

                                        <h3>

                                            {workout.workoutName}

                                        </h3>

                                    </div>

                                    <div className="professional-exercise">

                                        {workout.exercises.map((exercise) => (

                                            <div

                                                className="professional-exercise-row"

                                                key={exercise._id}

                                            >

                                                <div>

                                                    <span>Exercise</span>

                                                    <strong>

                                                        {exercise.name}

                                                    </strong>

                                                </div>

                                                <div>

                                                    <span>Sets</span>

                                                    <strong>

                                                        {exercise.sets}

                                                    </strong>

                                                </div>

                                                <div>

                                                    <span>Reps</span>

                                                    <strong>

                                                        {exercise.reps}

                                                    </strong>

                                                </div>

                                            </div>

                                        ))}

                                    </div>

                                    <div className="professional-workout-actions">

                                        {completedWorkouts.includes(workout._id) ? (

                                            <button

                                                className="complete-button"

                                                disabled

                                            >

                                                ✓ Completed

                                            </button>

                                        ) : (

                                            <button

                                                className="complete-button"

                                                onClick={() =>

                                                    handleTracking(workout._id)

                                                }

                                            >

                                                Complete Workout

                                            </button>

                                        )}

                                        <button

                                            className="edit-button"

                                            onClick={() =>

                                                handleEdit(workout)

                                            }

                                        >

                                            Edit

                                        </button>

                                        <button

                                            className="delete-button"

                                            onClick={() =>

                                                handleDelete(workout._id)

                                            }

                                        >

                                            Delete

                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

            </div>

        </div>

    );

}

export default Workout;