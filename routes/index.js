const router = require("express").Router();
const { auth } = require("../middlewares/Auth");
const errorHandler = require("../middlewares/errorHandler");
const routerUser = require("./user");
const routerWeather = require("./weather");
const routerUserWeather = require("./userWeather");

// Public routes
router.use("/users", routerUser);
router.use("/weather", routerWeather);

// Protected routes (auth required)
router.use(auth);

router.use("/user-weather", routerUserWeather);

router.use(errorHandler);

module.exports = router;
