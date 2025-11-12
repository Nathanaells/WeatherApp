const ControllerWeather = require("../controller/controllerWeather");
const { authz } = require("../middlewares/Auth");
const router = require("express").Router();

router.get("/", ControllerWeather.read);
router.get("/countries", ControllerWeather.getCountries);
router.get("/country/:country", ControllerWeather.getByCountry);
router.post("/fetch", ControllerWeather.fetchAndStoreWeatherData);
router.post("/refresh", ControllerWeather.refreshWeatherData);

module.exports = router;
