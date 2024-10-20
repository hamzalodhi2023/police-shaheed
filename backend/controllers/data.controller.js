const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../database/data.json");

const data = (req, res) => {
  try {
    fs.readFile(dataPath, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Error reading data." });
      } else {
        return res.send(JSON.parse(data));
      }
    });
  } catch (error) {}
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
