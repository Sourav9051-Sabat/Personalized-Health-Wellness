const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const authRoutes = require("./routes/authRoutes");
const healthRoutes = require("./routes/healthRoutes");
const personalizationRoutes = require("./routes/personalizationRoutes");
const workoutRoutes = require("./routes/workoutRoutes");
const workoutTrackingRoutes = require("./routes/workoutTrackingRoutes");
const progressRoutes = require("./routes/progressRoutes");

// CORS configuration
app.use(cors({
    origin: [
        "https://personalized-health-wellness.vercel.app",
        "http://localhost:5173"
    ]
}));

app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/health", healthRoutes);
app.use("/api/personalization", personalizationRoutes);
app.use("/api/workouts", workoutRoutes);
app.use("/api/workout-tracking", workoutTrackingRoutes);
app.use("/api/progress", progressRoutes);

// Root route
app.get("/", (req, res) => {
    res.send("Health & Wellness API is running");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.log(err);
    process.exit(1);
});

// Server
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
