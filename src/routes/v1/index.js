const express = require("express");
const { infoController } = require("../../controllers");
const airplaneRotes = require("./airplane-routes");
const cityRoutes = require("./city-routes");

const router = express.Router();

router.use("/airplanes", airplaneRotes);

router.use("/cities", cityRoutes);

router.get("/info", infoController.info);

module.exports = router;
