const ControllerWeather = require("../controller/controllerWeather");

const router = require("express").Router();

router.get("/", ControllerWeather.read);

module.exports = router;
