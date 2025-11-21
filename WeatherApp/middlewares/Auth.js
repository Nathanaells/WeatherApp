const { verifyToken } = require("../helper/jwt");
const { User, UserWeather } = require("../models");
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
    const { id } = req.params;
    const { userId } = req.loginInfo;

    const userWeather = await UserWeather.findByPk(id);

    if (!userWeather) {
      throw { name: "NotFound" };
    }

    if (userWeather.userId !== userId) {
      throw {
        name: "Forbidden",
      };
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  auth,
  authz,
};
