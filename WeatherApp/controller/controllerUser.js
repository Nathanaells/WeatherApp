const { comparePassword } = require("../helper/bcrypt");
const { signToken } = require("../helper/jwt");
const { OAuth2Client } = require("google-auth-library");
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

  static async loginGoogle(req, res, next) {
    try {
      const { googleAccessToken } = req.body;

      if (!googleAccessToken) throw { name: "LoginGoogleError" };
      const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

      const ticket = await client.verifyIdToken({
        idToken: googleAccessToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      
      const googleId = payload.sub;
      const email = payload.email;
      const name = payload.name;
      const picture = payload.picture;

      let user = await User.findOne({ where: { email } });

      if (!user) {
        user = await User.create({
          username: name,
          email: email,
          password: Math.random().toString(36).slice(-8),
          googleId: googleId,
          avatar: picture,
        });
      } else {
        await user.update({
          googleId: googleId,
          avatar: picture,
        });
      }

      const tokenPayload = {
        id: user.id,
        email: user.email,
        username: user.username,
      };
      const access_token = signToken(tokenPayload);

      res.status(200).json({
        access_token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllersUser;
