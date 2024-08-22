const express = require("express");
const { airportController } = require("../../controllers");

const router = express.Router();
// /Api?v1/airplanes --POST
router.post("/", airportController.createAirport);
// /Api?v1/airplanes --GET
router.get("/", airportController.getAirports);

router.get("/:id", airportController.getAirport);

router.delete("/:id", airportController.deleteAirport);

module.exports = router;
