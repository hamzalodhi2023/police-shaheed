// Import required modules
const express = require("express");
const Router = express.Router();

// Import controller functions
const {
  getShaheed,
  getSingleShaheed,
  createShaheed,
  editShaheed,
  deleteShaheed,
} = require("../controllers/shaheed.controller");

/// Import middleware for handling file uploads
const upload = require("../middlewares/shaheed-multer.middleware");

// Define routes and associate them with controller functions
Router.get("/", getShaheed) // Get all shaheed records
  .get("/:id", getSingleShaheed) // Get a single shaheed record by ID
  .post("/create", upload.single("photo"), createShaheed) // Create a new shaheed record
  .patch("/edit/:id", editShaheed) // Update an existing shaheed record
  .delete("/delete/:id", deleteShaheed); // Delete a shaheed record

// Export the router for use in other parts of the application
module.exports = Router;
