const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../database/data.json");
const debug = require("debug")("development:controller:shaheed");

const data = (req, res) => {
  try {
    fs.readFile(dataPath, "utf-8", (err, data) => {
      if (err) {
        debug(err);
        return res.status(500).json({ message: "Error reading data." });
      } else {
        const parsedData = JSON.parse(data);
        return res.status(200).json(parsedData);
      }
    });
  } catch (error) {
    debug(error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
const singleData = (req, res) => {};
const createData = (req, res) => {};
const editData = (req, res) => {};
const deleteData = (req, res) => {};

module.exports = {
  data,
  singleData,
  createData,
  editData,
  deleteData,
};
