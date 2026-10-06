
import { useState } from "react";

import axios from "axios";

function Register() {

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const handleRegister = async (e) => {

        e.preventDefault();

        setError("");

        setLoading(true);

        try {

            const response = await axios.post(

                "http://localhost:8080/api/auth/register",

                {

                    name: name,

                    email: email,

                    password: password

                }

            );

            alert(response.data.message);

        }

        catch (err) {

            if (err.response) {

                setError(

                    err.response.data.message || "Registration failed"

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

        <div className="auth-page">

            <div className="auth-card">

                <div className="auth-header">

                    <div className="auth-icon">

                        +

                    </div>

                    <p className="auth-brand">

                        HEALTH & WELLNESS

                    </p>

                    <h1>Create Account</h1>

                    <p>

                        Create your account to start your health

                        and wellness journey.

                    </p>

                </div>

                {error && (

                    <div className="auth-error">

                        {error}

                    </div>

                )}

                <form onSubmit={handleRegister}>

                    <div className="auth-form-group">

                        <label>Full Name</label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                    </div>

                    <div className="auth-form-group">

                        <label>Email Address</label>

                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                    </div>

                    <div className="auth-form-group">

                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="auth-submit-button"
                        disabled={loading}
                    >

                        {loading ? "Creating Account..." : "Create Account"}

                        {!loading && <span> →</span>}

                    </button>

                </form>

                <div className="auth-footer">

                    <p>

                        Already have an account?

                    </p>

                    <a href="/login">

                        Sign in to your account

                    </a>

                </div>

            </div>

        </div>

    );

}

export default Register;

