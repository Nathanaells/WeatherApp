const router = require("express").Router();
const { auth } = require("../middlewares/Auth");
const errorHandler = require("../middlewares/errorHandler");
const routerUser = require("./user");
const routerWeather = require("./weather");
const routerUserWeather = require("./userWeather");
const geminiDataRouter = require("./gemini");

router.use("/users", routerUser);
router.use("/weather", routerWeather);
router.use("/gemini-data", geminiDataRouter);

router.use(auth);

router.use("/user-weather", routerUserWeather);

router.use(errorHandler);

module.exports = router;
