const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const healthRoutes = require("./routes/healthRoutes"); 
const personalizationRoutes = require("./routes/personalizationRoutes");  
const workoutRoutes = require("./routes/workoutRoutes");
const workoutTrackingRoutes = require("./routes/workoutTrackingRoutes");
const progressRoutes = require("./routes/progressRoutes");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/health", healthRoutes);   
app.use("/api/personalization", personalizationRoutes);    
app.use("/api/workouts", workoutRoutes);  
app.use("/api/workout-tracking", workoutTrackingRoutes); 
app.use("/api/progress", progressRoutes);          

app.get("/", (req, res) => {
    res.send("Health & Wellness API is running");
});

mongoose.connect(
    process.env.MONGO_URL,
    {
        auth: {
            username: process.env.MONGO_USERNAME,
            password: process.env.MONGO_PASSWORD
        }
    }
)
 .then(() => {
  console.log("MongoDB connected");
})
.catch((err) => {
  console.log(err);
  process.exit(1);
});

app.listen(8080, () => {
   console.log("Server is listening on port 8080");
});