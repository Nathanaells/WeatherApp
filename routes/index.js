const router = require("express").Router();
const { auth } = require("../middlewares/Auth");
const errorHandler = require("../middlewares/errorHandler");
const routerUser = require("./user");
const routerWeather = require("./weather");

router.use("/users", routerUser);

router.use("/weather", auth, routerWeather);

router.use(errorHandler);

module.exports = router;
