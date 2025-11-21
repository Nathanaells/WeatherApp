"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Weather extends Model {
    static associate(models) {}
  }
  Weather.init(
    {
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Country is required" },
          notEmpty: { msg: "Country is required" },
        },
      },
      cityName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "City Name is required" },
          notEmpty: { msg: "City Name is required" },
        },
      },
      lat: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      lon: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      temperature: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: { msg: "Temperature is required" },
          notEmpty: { msg: "Temperature is required" },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Description is required" },
          notEmpty: { msg: "Description is required" },
        },
      },
      humidity: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      windSpeed: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      source: {
        type: DataTypes.STRING,
        defaultValue: "API",
      },
    },
    {
      sequelize,
      modelName: "Weather",
    }
  );
  return Weather;
};
