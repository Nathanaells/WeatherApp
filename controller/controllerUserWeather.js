const { UserWeather, User } = require("../models");

class ControllerUserWeather {
  // Get all user weather reports
  static async getAll(req, res, next) {
    try {
      const userWeathers = await UserWeather.findAll({
        include: {
          model: User,
          attributes: ["id", "username", "email"],
        },
        order: [["createdAt", "DESC"]],
      });

      // Transform response to match client expectations
      const formatted = userWeathers.map((uw) => ({
        id: uw.id,
        userId: uw.userId,
        cityName: uw.cityName,
        lat: uw.lat,
        lon: uw.ion, // note: model has typo "ion" instead of "lon"
        temperature: uw.temperature,
        description: uw.description,
        humidity: uw.humidity,
        windSpeed: uw.windSpeed,
        votes: uw.vote, // note: model has "vote" not "votes"
        User: uw.User,
        createdAt: uw.createdAt,
        updatedAt: uw.updatedAt,
      }));

      res.status(200).json(formatted);
    } catch (error) {
      console.error("Error fetching user weather:", error);
      next(error);
    }
  }

  // Create user weather report
  static async create(req, res, next) {
    try {
      const { userId } = req.loginInfo;
      const {
        cityName,
        lat,
        lon,
        temperature,
        description,
        humidity,
        windSpeed,
      } = req.body;

      if (!cityName || temperature === undefined || !description) {
        throw {
          name: "FormError",
          message: "City name, temperature, and description are required",
        };
      }

      const userWeather = await UserWeather.create({
        userId,
        cityName,
        lat: lat || 0,
        ion: lon || 0, // note: model uses "ion" for longitude
        temperature,
        description,
        humidity: humidity || 0,
        windSpeed: windSpeed || 0,
        vote: 0,
        source: "USER",
      });

      const populated = await UserWeather.findByPk(userWeather.id, {
        include: {
          model: User,
          attributes: ["id", "username", "email"],
        },
      });

      res.status(201).json({
        id: populated.id,
        userId: populated.userId,
        cityName: populated.cityName,
        lat: populated.lat,
        lon: populated.ion,
        temperature: populated.temperature,
        description: populated.description,
        humidity: populated.humidity,
        windSpeed: populated.windSpeed,
        votes: populated.vote,
        User: populated.User,
      });
    } catch (error) {
      console.error("Error creating user weather:", error);
      next(error);
    }
  }

  // Update user weather report
  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { userId } = req.loginInfo;
      const { temperature, description, humidity, windSpeed } = req.body;

      const userWeather = await UserWeather.findByPk(id);
      if (!userWeather) {
        throw { name: "NotFound", message: "Weather report not found" };
      }

      // Check ownership
      if (userWeather.userId !== userId) {
        throw {
          name: "Unauthorized",
          message: "You can only edit your own reports",
        };
      }

      await userWeather.update({
        temperature,
        description,
        humidity,
        windSpeed,
      });

      const updated = await UserWeather.findByPk(id, {
        include: {
          model: User,
          attributes: ["id", "username", "email"],
        },
      });

      res.status(200).json({
        id: updated.id,
        userId: updated.userId,
        cityName: updated.cityName,
        lat: updated.lat,
        lon: updated.ion,
        temperature: updated.temperature,
        description: updated.description,
        humidity: updated.humidity,
        windSpeed: updated.windSpeed,
        votes: updated.vote,
        User: updated.User,
      });
    } catch (error) {
      console.error("Error updating user weather:", error);
      next(error);
    }
  }

  // Delete user weather report
  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const { userId } = req.loginInfo;

      const userWeather = await UserWeather.findByPk(id);
      if (!userWeather) {
        throw { name: "NotFound", message: "Weather report not found" };
      }

      // Check ownership
      if (userWeather.userId !== userId) {
        throw {
          name: "Unauthorized",
          message: "You can only delete your own reports",
        };
      }

      await userWeather.destroy();
      res.status(200).json({ message: "Weather report deleted successfully" });
    } catch (error) {
      console.error("Error deleting user weather:", error);
      next(error);
    }
  }

  // Vote on a weather report
  static async vote(req, res, next) {
    try {
      const { id } = req.params;

      const userWeather = await UserWeather.findByPk(id);
      if (!userWeather) {
        throw { name: "NotFound", message: "Weather report not found" };
      }

      await userWeather.increment("vote");
      const updated = await UserWeather.findByPk(id, {
        include: {
          model: User,
          attributes: ["id", "username", "email"],
        },
      });

      res.status(200).json({
        id: updated.id,
        userId: updated.userId,
        cityName: updated.cityName,
        lat: updated.lat,
        lon: updated.ion,
        temperature: updated.temperature,
        description: updated.description,
        humidity: updated.humidity,
        windSpeed: updated.windSpeed,
        votes: updated.vote,
        User: updated.User,
      });
    } catch (error) {
      console.error("Error voting:", error);
      next(error);
    }
  }
}

module.exports = ControllerUserWeather;
