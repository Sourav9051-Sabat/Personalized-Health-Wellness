const express = require("express");
const routes = express.Router();

const { registerUser, loginUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

routes.post("/register", registerUser);
routes.post("/login", loginUser);

routes.get("/profile", authMiddleware, (req, res) => {

    res.json({
        message: "Protected route accessed successfully",
        user: req.user
    });

});

module.exports = routes;