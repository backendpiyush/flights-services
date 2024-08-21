const express = require("express");
const { cityController } = require("../../controllers");
const { CityMiddlewares } = require("../../middlewares");

const router = express.Router();
// /Api?v1/cities --POST
router.post(
  "/",
  CityMiddlewares.validateCreateRequest,
  cityController.createCity
);

router.get("/", cityController.getCities);

module.exports = router;
