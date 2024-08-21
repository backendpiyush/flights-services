const express = require("express");
const { airplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");

const router = express.Router();
// /Api?v1/airplanes --POST
router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  airplaneController.createAirplane
);
// /Api?v1/airplanes --GET
router.get("/", airplaneController.getAirplanes);

router.get("/:id", airplaneController.getAirplane);

router.delete("/:id", airplaneController.deleteAirplane);

module.exports = router;
