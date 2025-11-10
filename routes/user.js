const ControllersUser = require("../controller/controllerUser");
const router = require("express").Router();

router.post("/register", ControllersUser.register);

module.exports = router;
