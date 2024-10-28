/**
 * Express application setup and configuration.
 * @module app
 */

const express = require("express");
const cors = require("cors");
const debug = require("debug")("development:app");

// Import routes
const shaheedRoute = require("./routes/shaheed.route");

// Load environment variables
require("dotenv").config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT;

// Middleware setup
app.use(
  cors({
    origin: ["https://police-shaheed.vercel.app"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route setup
app.use("/api/shaheed", shaheedRoute);

/**
 * Root route handler.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * Start the server and listen on the specified port.
 */
app.listen(PORT, () => {
  debug(`Server is running on port ${PORT}`);
});
