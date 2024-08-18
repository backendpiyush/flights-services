const express = require("express");
const { infoController } = require("../../controllers");
const airplaneRotes = require("./airplane-routes");

const router = express.Router();

router.use("/airplanes", airplaneRotes);

router.get("/info", infoController.info);

module.exports = router;
