"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Weather extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Weather.init(
    {
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
      ion: {
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
