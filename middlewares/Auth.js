const { verifyToken } = require("../helper/jwt");
const { User } = require("../models");
async function auth(req, res, next) {
  try {
    const { authorization } = req.headers;

    if (!authorization) throw { name: "Unauthorized" };
    const token = authorization.split(" ")[1];
    const payload = verifyToken(token);

    req.loginInfo = {
      userId: payload.id,
      email: payload.email,
    };
    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function authz(req, res, next) {
  try {
    const { userId } = req.loginInfo;
    const user = await User.findByPk(userId);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  auth,
  authz,
};
