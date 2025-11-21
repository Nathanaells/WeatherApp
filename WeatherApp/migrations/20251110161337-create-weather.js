"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Weather", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cityName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lat: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
      },
      lon: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
      },
      temperature: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      humidity: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
      },
      windSpeed: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
      },
      source: {
        type: Sequelize.STRING,
        defaultValue: "API",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Weather");
  },
};
