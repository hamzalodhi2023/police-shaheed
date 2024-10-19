const express = require("express");
const router = express.Router();
const dataController = require("../controllers/data.controller");

// GET all data
router.get("/", dataController.data);

// GET single data by ID
router.get("/:id", dataController.singleData);

// POST new data
router.post("/create", dataController.createData);

// PUT update existing data
router.patch("/edit/:id", dataController.editData);

// DELETE data
router.delete("/delete/:id", dataController.deleteData);

module.exports = router;
