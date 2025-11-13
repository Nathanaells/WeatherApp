const axios = require("axios");
const { Weather } = require("../models");

class ControllerWeather {
  static async fetchAndStoreWeatherData(req, res, next) {
    try {
      const searchQueries = [
        "a",
        "e",
        "i",
        "o",
        "u",
        "b",
        "c",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "m",
        "n",
        "p",
        "q",
        "r",
        "s",
        "t",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];

      const allLocations = [];
      const countryMap = new Map();

      for (const query of searchQueries) {
        try {
          const { data } = await axios.get(
            "http://api.weatherapi.com/v1/search.json",
            {
              params: {
                key: process.env.WEATHER_API_KEY,
                q: query,
              },
            }
          );

          allLocations.push(...data);
          console.log(`✓ Fetched ${data.length} locations for query: ${query}`);

          await new Promise((resolve) => setTimeout(resolve, 200));
        } catch (error) {
          console.error(`✗ Error fetching query ${query}:`, error.message);
        }
      }

      for (const loc of allLocations) {
        if (!countryMap.has(loc.country)) {
          countryMap.set(loc.country, []);
        }

        const cities = countryMap.get(loc.country);
        if (cities.length < 10) {
          cities.push(loc);
        }
      }

      const countries = Array.from(countryMap.entries()).slice(0, 150);

      let totalCitiesStored = 0;
      const weatherResults = [];

      for (const [country, cities] of countries) {
        for (const city of cities) {
          try {
            const { data: weatherData } = await axios.get(
              "http://api.weatherapi.com/v1/current.json",
              {
                params: {
                  key: process.env.WEATHER_API_KEY,
                  q: `${city.lat},${city.lon}`,
                  aqi: "no",
                },
              }
            );

            const [weather, created] = await Weather.findOrCreate({
              where: {
                country: city.country,
                cityName: city.name,
              },
              defaults: {
                country: city.country,
                cityName: city.name,
                lat: city.lat,
                lon: city.lon,
                temperature: weatherData.current.temp_c,
                description: weatherData.current.condition.text,
                humidity: weatherData.current.humidity,
                windSpeed: weatherData.current.wind_kph,
                source: "API",
              },
            });

            if (!created) {
              await weather.update({
                temperature: weatherData.current.temp_c,
                description: weatherData.current.condition.text,
                humidity: weatherData.current.humidity,
                windSpeed: weatherData.current.wind_kph,
              });
            }

            weatherResults.push(weather);
            totalCitiesStored++;

            await new Promise((resolve) => setTimeout(resolve, 100));
          } catch (error) {
            throw error;
          }
        }
      }

      res.status(200).json({
        message: "Weather data fetched and stored successfully",
        totalCountries: countries.length,
        totalCities: totalCitiesStored,
        data: weatherResults,
      });
    } catch (error) {
      next(error);
    }
  }

  static async read(req, res, next) {
    try {
      const weather = await Weather.findAll({
        order: [
          ["country", "ASC"],
          ["cityName", "ASC"],
        ],
      });

      const groupedByCountry = weather.reduce((acc, item) => {
        if (!acc[item.country]) {
          acc[item.country] = {
            country: item.country,
            cities: [],
          };
        }

        acc[item.country].cities.push({
          id: item.id,
          cityName: item.cityName,
          lat: item.lat,
          lon: item.lon,
          temperature: item.temperature,
          description: item.description,
          humidity: item.humidity,
          windSpeed: item.windSpeed,
          source: item.source,
          updatedAt: item.updatedAt,
        });

        return acc;
      }, {});

      const result = Object.values(groupedByCountry);

      res.status(200).json({
        totalCountries: result.length,
        totalCities: weather.length,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getByCountry(req, res, next) {
    try {
      const { country } = req.params;

      const weather = await Weather.findAll({
        where: { country },
        order: [["cityName", "ASC"]],
      });

      if (weather.length === 0) {
        throw {
          name: "NotFound",
        };
      }

      res.status(200).json({
        country,
        totalCities: weather.length,
        cities: weather,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getCountries(req, res, next) {
    try {
      const countries = await Weather.findAll({
        attributes: [
          "country",
          [
            Weather.sequelize.fn("COUNT", Weather.sequelize.col("id")),
            "cityCount",
          ],
          [Weather.sequelize.fn("AVG", Weather.sequelize.col("lat")), "avgLat"],
          [Weather.sequelize.fn("AVG", Weather.sequelize.col("lon")), "avgLon"],
        ],
        group: ["country"],
        order: [["country", "ASC"]],
      });

      res.status(200).json({
        totalCountries: countries.length,
        countries: countries.map((c) => ({
          name: c.country,
          cityCount: parseInt(c.dataValues.cityCount),
          lat: parseFloat(c.dataValues.avgLat),
          lon: parseFloat(c.dataValues.avgLon),
        })),
      });
    } catch (error) {
      next(error);
    }
  }

  static async refreshWeatherData(req, res, next) {
    try {
      const allWeather = await Weather.findAll();
      let updatedCount = 0;

      for (const weather of allWeather) {
        try {
          const { data: weatherData } = await axios.get(
            "http://api.weatherapi.com/v1/current.json",
            {
              params: {
                key: process.env.WEATHER_API_KEY,
                q: `${weather.lat},${weather.lon}`,
                aqi: "no",
              },
            }
          );

          await weather.update({
            temperature: weatherData.current.temp_c,
            description: weatherData.current.condition.text,
            humidity: weatherData.current.humidity,
            windSpeed: weatherData.current.wind_kph,
          });

          updatedCount++;

          await new Promise((resolve) => setTimeout(resolve, 100));
        } catch (error) {
          next(error);
        }
      }

      res.status(200).json({
        message: "Weather data refreshed successfully",
        updated: updatedCount,
        total: allWeather.length,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerWeather;
