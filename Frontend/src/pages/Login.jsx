import { useState } from "react";

import axios from "axios";

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        setError("");

        setLoading(true);

        try {

            const response = await axios.post(

                "https://personalized-health-wellness-backend.onrender.com/api/auth/login",

                {

                    email: email,

                    password: password

                }

            );

            localStorage.setItem("token", response.data.token);

            alert(response.data.message);

            window.location.href = "/dashboard";

        }

        catch (err) {

            if (err.response) {

                setError(

                    err.response.data.message || "Invalid email or password"

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

                    <h1>Welcome Back</h1>

                    <p>

                        Sign in to continue your personalized health

                        and wellness journey.

                    </p>

                </div>

                {error && (

                    <div className="auth-error">

                        {error}

                    </div>

                )}

                <form onSubmit={handleLogin}>

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

                            placeholder="Enter your password"

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

                        {loading ? "Signing In..." : "Sign In"}

                        {!loading && <span> →</span>}

                    </button>

                </form>

                <div className="auth-footer">

                    <p>

                        New to Health & Wellness?

                    </p>

                    <a href="/register">

                        Create your account

                    </a>

                </div>

            </div>

        </div>

    );

}

export default Login;

