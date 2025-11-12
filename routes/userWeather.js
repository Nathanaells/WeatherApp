const ControllerUserWeather = require("../controller/controllerUserWeather");
const { auth } = require("../middlewares/Auth");
const router = require("express").Router();

// All user-weather routes require authentication
router.use(auth);

router.get("/", ControllerUserWeather.getAll);
router.post("/", ControllerUserWeather.create);
router.put("/:id", ControllerUserWeather.update);
router.delete("/:id", ControllerUserWeather.delete);
router.post("/vote/:id", ControllerUserWeather.vote);

module.exports = router;
