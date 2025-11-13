const { UserWeather, User, Weather } = require("../models");
const axios = require("axios");

class ControllerUserWeather {
  static async getAll(req, res, next) {
    try {
      const userWeathers = await UserWeather.findAll({
        include: {
          model: User,
          attributes: ["id", "username", "email"],
        },
        order: [["createdAt", "DESC"]],
      });

      const formatted = userWeathers.map((uw) => ({
        id: uw.id,
        userId: uw.userId,
        cityName: uw.cityName,
        lat: uw.lat,
        lon: uw.lon,
        temperature: uw.temperature,
        description: uw.description,
        humidity: uw.humidity,
        windSpeed: uw.windSpeed,
        votes: uw.vote,
        User: uw.User,
        createdAt: uw.createdAt,
        updatedAt: uw.updatedAt,
      }));

      if (formatted.length < 1) throw { name: "NotFound" };
      res.status(200).json(formatted);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const { userId } = req.loginInfo;
      const {
        country,
        cityName,
        temperature,
        description,
        humidity,
        windSpeed,
      } = req.body;

      if (!cityName || !country) throw { name: "CreateError" };

      let existingCity = await Weather.findOne({
        where: { country, cityName },
      });

      if (!existingCity) {
        const { data } = await axios.get(
          "http://api.weatherapi.com/v1/search.json",
          {
            params: { key: process.env.WEATHER_API_KEY, q: cityName },
          }
        );

        if (!data || data.length === 0) throw { name: "InvalidCity" };

        const found = data.find((item) => {
          item.country.toLowerCase() === country.toLowerCase();
          item.name.toLowerCase() === cityName.toLowerCase();
        });

        if (!found) throw { name: "InvalidCountry" };

        existingCity = await Weather.create({
          country: found.country,
          cityName: found.name,
          lat: found.lat,
          lon: found.lon,
        });
      }

      const userWeather = await UserWeather.create({
        userId,
        country: existingCity.country,
        cityName: existingCity.cityName,
        lat: existingCity.lat,
        lon: existingCity.lon,
        temperature,
        description,
        humidity,
        windSpeed,
        vote: 0,
        source: "USER",
      });

      res.status(201).json(userWeather);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { temperature, description, humidity, windSpeed } = req.body;

      const userWeather = await UserWeather.findByPk(id);
      if (!userWeather)
        throw { name: "NotFound", message: "Weather report not found" };

      await userWeather.update({
        temperature,
        description,
        humidity,
        windSpeed,
      });

      res.status(200).json(userWeather);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const userWeather = await UserWeather.findByPk(id);
      if (!userWeather)
        throw { name: "NotFound", message: "Weather report not found" };

      await userWeather.destroy();
      res.status(200).json({ message: "Weather report deleted successfully" });
    } catch (error) {
      next(error);
    }
  }

  static async vote(req, res, next) {
    try {
      const { id } = req.params;

      const userWeather = await UserWeather.findByPk(id);

      if (!userWeather) throw { name: "NotFound" };

      await userWeather.increment("vote");

      const updated = await UserWeather.findByPk(id, {
        include: { model: User, attributes: ["id", "username", "email"] },
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
      next(error);
    }
  }
}

module.exports = ControllerUserWeather;
