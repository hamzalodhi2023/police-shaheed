// Required modules
const fs = require("fs");
const path = require("path");
const debug = require("debug")("development:controller:shaheed");

// Path to the JSON file containing shaheed data
const shaheedFilePath = path.join(__dirname, "../database/shaheed.json");

/**
 * Retrieves all shaheed data
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} JSON response with shaheed data or error message
 */
/**
 * Retrieves all shaheed data from the JSON file
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} JSON response with shaheed data or error message
 */
const getShaheed = (req, res) => {
  try {
    // Read the contents of the shaheed JSON file
    fs.readFile(shaheedFilePath, "utf-8", (err, data) => {
      if (err) {
        // Log the error for debugging purposes
        debug(err);
        // Return a 500 Internal Server Error response
        return res.status(500).json({ error: "Internal Server Error" });
      }
      // Parse the JSON data
      const shaheedData = JSON.parse(data);
      // Return a 200 OK response with the shaheed data
      return res.status(200).json(shaheedData);
    });
  } catch (error) {
    // Log any unexpected errors
    debug(error);
    // Return a 500 Internal Server Error response
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Retrieves a single shaheed record
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getSingleShaheed = (req, res) => {
  try {
    // Extract the shaheed ID from the request parameters
    const { id } = req.params;

    // Read the contents of the shaheed JSON file
    fs.readFile(shaheedFilePath, "utf-8", (err, data) => {
      if (err) {
        // Log the error for debugging purposes
        debug(err);
        // Return a 500 Internal Server Error response
        return res.status(500).json({ error: "Internal Server Error" });
      }

      // Parse the JSON data
      const shaheedData = JSON.parse(data);

      // Find the shaheed with the matching ID
      const shaheed = shaheedData.find((shaheed) => shaheed.id === Number(id));

      // If no shaheed is found, return a 404 Not Found response
      if (!shaheed) {
        debug("Shaheed not found");
        return res.status(404).json({ error: "Shaheed not found" });
      }

      // Return a 200 OK response with the found shaheed data
      return res.status(200).json(shaheed);
    });
  } catch (error) {
    // Log any unexpected errors
    debug(error);
    // Return a 500 Internal Server Error response
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

/**
 * Creates a new shaheed record
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const createShaheed = (req, res) => {};

/**
 * Updates an existing shaheed record
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const editShaheed = (req, res) => {};

/**
 * Deletes a shaheed record
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const deleteShaheed = (req, res) => {};

// Export controller functions
module.exports = {
  getShaheed,
  getSingleShaheed,
  createShaheed,
  editShaheed,
  deleteShaheed,
};
