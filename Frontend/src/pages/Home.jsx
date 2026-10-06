function Home() {

    return (

        <div className="home-page">

            <div className="home-hero">

                <div className="home-hero-content">

                    <p className="home-label">

                        PERSONALIZED HEALTH & WELLNESS

                    </p>

                    <h1>

                        Take Control of Your

                        <span> Health & Wellness</span>

                    </h1>

                    <p className="home-subtitle">

                        Manage your health, fitness and wellness in one place

                        with personalized plans designed around your goals.

                    </p>

                    <div className="home-actions">

                        <a

                            href="/register"

                            className="home-primary-button"

                        >

                            Get Started

                            <span>→</span>

                        </a>

                        <a

                            href="/login"

                            className="home-secondary-button"

                        >

                            Login

                        </a>

                    </div>

                </div>

                <div className="home-hero-card">

                    <div className="home-card-icon">

                        +

                    </div>

                    <h2>

                        Your Wellness Journey

                    </h2>

                    <p>

                        Personalized fitness plans, workout tracking

                        and progress insights in one platform.

                    </p>

                    <div className="home-card-stats">

                        <div>

                            <strong>100%</strong>

                            <span>Personalized</span>

                        </div>

                        <div>

                            <strong>24/7</strong>

                            <span>Access</span>

                        </div>

                    </div>

                </div>

            </div>

            <div className="home-features">

                <div className="home-section-header">

                    <p>WHY CHOOSE US</p>

                    <h2>

                        Everything You Need for Better Wellness

                    </h2>

                    <span>

                        Build healthier habits with tools designed to keep

                        your wellness journey simple and organized.

                    </span>

                </div>

                <div className="home-feature-grid">

                    <div className="home-feature-card">

                        <div className="home-feature-icon">

                            +

                        </div>

                        <h3>Personalized Plans</h3>

                        <p>

                            Get workout recommendations based on your

                            fitness goals, activity level and health profile.

                        </p>

                    </div>

                    <div className="home-feature-card">

                        <div className="home-feature-icon">

                            ✓

                        </div>

                        <h3>Track Your Progress</h3>

                        <p>

                            Monitor completed workouts and follow your

                            progress throughout your wellness journey.

                        </p>

                    </div>

                    <div className="home-feature-card">

                        <div className="home-feature-icon">

                            →

                        </div>

                        <h3>Manage Your Workouts</h3>

                        <p>

                            Create, update and manage structured workouts

                            designed around your personal fitness goals.

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Home;