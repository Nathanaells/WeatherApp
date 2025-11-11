const axios = require("axios");

class ControllerWeather {
  static async read(req, res, next) {
    try {
      const weather = await axios.get(
        "http://api.weatherapi.com/v1/current.json",
        {
          params: {
            key: process.env.WEATHER_API_KEY,
            q: "Jakarta",
          },
        }
      );
      console.log(weather);
      res.status(200).json(weather.data);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = ControllerWeather;
