const express = require("express");
const router = express.Router();
const db = require("../model/helper");
const enviroDataController = require("../controllers/enviroDataController");

/* GET all data */
// not used in app
router.get("/", enviroDataController.getAllEnviroData);

/* GET data by ZIP */
router.get("/:zip", enviroDataController.getByZip);

module.exports = router;
