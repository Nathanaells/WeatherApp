const router = require("express").Router();
const errorHandler = require("./middlewares/errorHandler");
const routerUser = require("./user");

router.use("/users", routerUser);

router.use(errorHandler);
module.exports = router;
