const ControllersUser = require("../controller/controllerUser");
const router = require("express").Router();

router.post("/register", ControllersUser.register);
router.post("/login", ControllersUser.login);
router.post("/login/google", ControllersUser.loginGoogle);

module.exports = router;
