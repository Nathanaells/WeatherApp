const ControllerUserWeather = require("../controller/controllerUserWeather");
const { authz } = require("../middlewares/Auth");
const router = require("express").Router();

router.get("/", ControllerUserWeather.getAll);
router.post("/", ControllerUserWeather.create);
router.put("/:id", authz, ControllerUserWeather.update);
router.delete("/:id", authz, ControllerUserWeather.delete);
router.patch("/:id", ControllerUserWeather.vote);

module.exports = router;
