import { useState } from "react";

function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(

        localStorage.getItem("token") !== null

    );

    const handleLogout = () => {

        localStorage.removeItem("token");

        setIsLoggedIn(false);

        window.location.href = "/login";

    };

    return (

        <nav className="main-navbar">

            <div className="navbar-container">

                <a href="/" className="navbar-brand">

                    <div className="brand-icon">

                        +

                    </div>

                    <div>

                        <h2>Health & Wellness</h2>

                        <span>Personalized Care</span>

                    </div>

                </a>

                <div className="navbar-links">

                    <a href="/" className="navbar-link">

                        Home

                    </a>

                    {isLoggedIn && (

                        <>

                            <a href="/health-profile" className="navbar-link">

                                Health Profile

                            </a>

                            <a href="/dashboard" className="navbar-link">

                                Dashboard

                            </a>

                            <a href="/workout" className="navbar-link">

                                Workouts

                            </a>

                        </>

                    )}

                </div>

                <div className="navbar-actions">

                    {isLoggedIn ? (

                        <button

                            onClick={handleLogout}

                            className="logout-button"

                        >

                            Logout

                        </button>

                    ) : (

                        <>

                            <a href="/login" className="login-link">

                                Login

                            </a>

                            <a href="/register" className="register-button">

                                Get Started

                            </a>

                        </>

                    )}

                </div>

            </div>

        </nav>

    );

}

export default Navbar;