// Required modules
const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");
const debug = require("debug")("development:controller:shaheed");

// Path to the JSON file containing shaheed data
const shaheedFilePath = path.join(__dirname, "../database/shaheed.json");

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
        return res.status(500).json({ message: "Internal Server Error" });
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
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Retrieves a single shaheed record
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} JSON response with shaheed data or error message
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
        return res.status(500).json({ message: "Internal Server Error" });
      }

      // Parse the JSON data
      const shaheedData = JSON.parse(data);

      // Find the shaheed with the matching ID
      const shaheed = shaheedData.find((shaheed) => shaheed.id === Number(id));

      // If no shaheed is found, return a 404 Not Found response
      if (!shaheed) {
        debug("Shaheed not found");
        return res.status(404).json({ message: "Shaheed not found" });
      }

      // Return a 200 OK response with the found shaheed data
      return res.status(200).json(shaheed);
    });
  } catch (error) {
    // Log any unexpected errors
    debug(error);
    // Return a 500 Internal Server Error response
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Creates a new shaheed record
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} JSON response with new shaheed data or error message
 */
const createShaheed = (req, res) => {
  let {
    personal_no,
    rank,
    service_no,
    name,
    father_name,
    cnic_no,
    unit,
    place_of_posting,
    dob,
    doa,
    dos,
    family_member,
    contact,
    address,
    fir_no,
    under_section,
    police_station,
    brief_fact,
    compensation_amount,
    paid_date,
  } = req.body;

  const [doaY, doaM, doaD] = doa.split("-");
  doa = `${doaD}-${doaM}-${doaY}`;

  const [dosY, dosM, dosD] = dos.split("-");
  dos = `${dosD}-${dosM}-${dosY}`;

  const [dobY, dobM, dobD] = dob.split("-");
  dob = `${dobD}-${dobM}-${dobY}`;

  const [pdY, pdM, pdD] = paid_date.split("-");
  paid_date = `${pdD}-${pdM}-${pdY}`;

  try {
    fs.readFile(shaheedFilePath, "utf-8", (err, data) => {
      if (err) {
        // Log the error for debugging purposes
        debug(err);
        // Return a 500 Internal Server Error response
        return res.status(500).json({ message: "Internal Server Error" });
      }
      // Parse the JSON data
      const shaheedData = JSON.parse(data);
      // Generate a new ID for the new shaheed
      const newId = Math.floor(Math.random() * 1000000000000000) + 1000000;
      // Create a new shaheed object
      const newShaheed = {
        id: newId,
        personal_no,
        rank,
        service_no,
        name,
        father_name,
        cnic_no,
        unit,
        place_of_posting,
        dob,
        doa,
        dos,
        family_member,
        contact,
        address,
        fir_no,
        under_section,
        police_station,
        brief_fact,
        compensation_amount,
        paid_date,
        photo: req.file.filename,
      };
      // Add the new shaheed to the data array
      shaheedData.push(newShaheed);
      // Write the updated data back to the JSON file
      fs.writeFile(shaheedFilePath, JSON.stringify(shaheedData), (err) => {
        if (err) {
          // Log the error for debugging purposes
          debug(err);
          // Return a 500 Internal Server Error response
          return res.status(500).json({ message: "Internal Server Error" });
        }
        // Return a 201 Created response with the new shaheed data
        return res.status(201).json({ id: newShaheed.id });
      });
    });
  } catch (error) {
    // Log the error for debugging purposes
    debug(error);
    // Return a 500 Internal Server Error response
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Updates an existing shaheed record
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const editShaheed = (req, res) => {
  try {
    // Extract the shaheed ID from the request parameters
    const { id } = req.params;
    let {
      personal_no,
      rank,
      service_no,
      name,
      father_name,
      cnic_no,
      unit,
      place_of_posting,
      dob,
      doa,
      dos,
      family_member,
      contact,
      address,
      fir_no,
      under_section,
      police_station,
      brief_fact,
      compensation_amount,
      paid_date,
    } = req.body;

    if (
      !personal_no ||
      !rank ||
      !service_no ||
      !name ||
      !father_name ||
      !cnic_no ||
      !unit ||
      !place_of_posting ||
      !dob ||
      !doa ||
      !dos ||
      !family_member ||
      !contact ||
      !address ||
      !fir_no ||
      !under_section ||
      !police_station ||
      !brief_fact ||
      !compensation_amount ||
      !paid_date
    ) {
      // Return a 400 Bad Request response with an error message
      return res.status(400).json({ message: "All fields are required" });
    }

    const [doaY, doaM, doaD] = doa.split("-");
    doa = `${doaD}-${doaM}-${doaY}`;

    const [dosY, dosM, dosD] = dos.split("-");
    dos = `${dosD}-${dosM}-${dosY}`;

    const [dobY, dobM, dobD] = dob.split("-");
    dob = `${dobD}-${dobM}-${dobY}`;

    const [pdY, pdM, pdD] = paid_date.split("-");
    paid_date = `${pdD}-${pdM}-${pdY}`;

    // Read the contents of the shaheed JSON file
    fs.readFile(shaheedFilePath, "utf-8", (err, data) => {
      if (err) {
        // Log the error for debugging purposes
        debug(err);
        // Return a 500 Internal Server Error
        return res.status(500).json({ message: "Internal Server Error" });
      }

      // Parse the JSON data
      const shaheedData = JSON.parse(data);
      // Find the index of the shaheed with the matching ID
      const shaheedIndex = shaheedData.findIndex(
        (shaheed) => shaheed.id === Number(id)
      );
      // If no shaheed is found, return a 404 Not Found response
      if (shaheedIndex === -1) {
        debug("Shaheed not found");
        return res.status(404).json({ message: "Shaheed not found" });
      }

      let file = shaheedData[shaheedIndex].photo;

      if (req.file && shaheedData[shaheedIndex].photo !== "default.jpg") {
        fs.unlink(path.join(__dirname, `../public/profiles/${file}`), (err) => {
          if (err) {
            debug(err);
          }
        });
      }

      // Update the
      shaheedData[shaheedIndex] = {
        id: Number(id),
        personal_no,
        rank,
        service_no,
        name,
        father_name,
        cnic_no,
        unit,
        place_of_posting,
        dob,
        doa,
        dos,
        family_member,
        contact,
        address,
        fir_no,
        under_section,
        police_station,
        brief_fact,
        compensation_amount,
        paid_date,
        photo: !req.file ? file : req.file.filename,
      };

      fs.writeFile(shaheedFilePath, JSON.stringify(shaheedData), (err) => {
        if (err) {
          // Log the error for debugging purposes
          debug(err);
          // Return a 500 Internal Server Error response
          return res.status(500).json({ message: "Internal Server Error" });
        }
        // Return a 200 OK response with the updated shaheed data
        return res.status(202).json({
          message: "Shaheed updated successfully",
        });
      });
    });
  } catch (error) {
    // Log the error for debugging purposes
    debug(error);
    // Return a 500 Internal Server Error response
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Deletes a shaheed record
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const deleteShaheed = (req, res) => {
  try {
    // Extract the shaheed ID from the request parameters
    const { id } = req.params;

    fs.readFile(shaheedFilePath, "utf-8", (err, data) => {
      if (err) {
        // Log the error for debugging purposes
        debug(err);
        // Return a 500 Internal Server Error response
        return res.status(500).json({ message: "Internal Server Error" });
      }
      // Parse the JSON data
      const shaheedData = JSON.parse(data);
      // Find the index of the shaheed with the matching ID
      const index = shaheedData.findIndex(
        (shaheed) => shaheed.id === Number(id)
      );
      // If no shaheed is found, return a 404 Not Found response
      if (index === -1) {
        debug("Shaheed not found");
        return res.status(404).json({ message: "Shaheed not found" });
      }

      // Store the deleted item before splicing
      const deletedItem = shaheedData[index];

      fs.readFile(
        path.join(__dirname, "../database/deletedItems.json"),
        (err, data) => {
          if (err) {
            debug(err);
          }
          const deletedItems = JSON.parse(data);
          deletedItems.push(deletedItem);
          fs.writeFile(
            path.join(__dirname, "../database/deletedItems.json"),
            JSON.stringify(deletedItems),
            (err) => {
              if (err) debug(err);
            }
          );
        }
      );

      // Remove the shaheed from the data array
      shaheedData.splice(index, 1);

      // Write the updated data back to the JSON file
      fs.writeFile(shaheedFilePath, JSON.stringify(shaheedData), (err) => {
        if (err) {
          // Log the error for debugging purposes
          debug(err);
          // Return a 500 Internal Server Error response
          return res.status(500).json({ message: "Internal Server Error" });
        }

        fse.move(
          path.join(__dirname, `../public/profiles/${deletedItem.photo}`),
          path.join(
            __dirname,
            `../public/deleted-profiles/${deletedItem.photo}`
          ),
          (err) => {
            if (err) {
              // Log the error for debugging purposes
              debug(err);
              // Return a 500 Internal Server Error response
              return res.status(500).json({ message: "Internal Server Error" });
            }
          }
        );
        // Return a 202 accepted response
        return res.status(202).json({ message: "Shaheed deleted!" });
      });
    });
  } catch (error) {
    // Log the error for debugging purposes
    debug(error);
    // Return a 500 Internal Server Error response
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Export controller functions
module.exports = {
  getShaheed,
  getSingleShaheed,
  createShaheed,
  editShaheed,
  deleteShaheed,
};
