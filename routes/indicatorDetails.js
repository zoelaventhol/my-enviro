const express = require("express");
const router = express.Router();
const db = require("../model/helper");
const indicatorDetailsController = require("../controllers/indicatorDetailsController");

/* GET all data */
router.get("/", indicatorDetailsController.getAllIndicatorDetails);

/* GET indicator details by id */
router.get("/:id", indicatorDetailsController.getIndicatorDetailsById);

module.exports = router;
