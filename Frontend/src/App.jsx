import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import HealthProfile from "./pages/HealthProfile";

import Workout from "./pages/Workout";

import "./App.css";

function App() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/home" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/health-profile" element={<HealthProfile />} />

                <Route path="/workout" element={<Workout />} />

            </Routes>

        </BrowserRouter>

    );

}

export default App;