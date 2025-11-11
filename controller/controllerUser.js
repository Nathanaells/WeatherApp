const { comparePassword } = require("../helper/bcrypt");
const { signToken } = require("../helper/jwt");
const { User } = require("../models");

class ControllersUser {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const newUser = await User.create({
        username,
        email,
        password,
      });

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { name: "FormError" };
      }
      const user = await User.findOne({ where: { email } });

      if (!user) {
        throw { name: "LoginError" };
      }

      if (!comparePassword(password, user.password))
        throw { name: "LoginError" };

      const payload = { id: user.id, email: user.email };
      const access_token = signToken(payload);

      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllersUser;
