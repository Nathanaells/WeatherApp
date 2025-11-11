"use strict";

const { hashPassword } = require("../helper/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        username: "admin",
        email: "admin@mail.com",
        password: hashPassword("admin123"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "user1",
        email: "user1@mail.com",
        password: hashPassword("12345"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "user2",
        email: "user2@mail.com",
        password: hashPassword("user234"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // Seed Weather
    await queryInterface.bulkInsert("Weather", [
      {
        cityName: "Jakarta",
        lat: -6.2088,
        lon: 106.8456,
        temperature: 28.5,
        description: "Partly cloudy",
        humidity: 75.0,
        windSpeed: 12.5,
        source: "API",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityName: "Bandung",
        lat: -6.9175,
        lon: 107.6191,
        temperature: 24.8,
        description: "Light rain",
        humidity: 82.0,
        windSpeed: 8.2,
        source: "API",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        cityName: "Surabaya",
        lat: -7.2575,
        lon: 112.7521,
        temperature: 30.2,
        description: "Sunny",
        humidity: 68.0,
        windSpeed: 15.7,
        source: "API",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("UserWeathers", [
      {
        userId: 1,
        cityName: "Jakarta",
        lat: -6.2088,
        ion: 106.8456,
        temperature: 29.0,
        description: "Cloudy",
        humidity: 77.0,
        windSpeed: 13.0,
        source: "USER",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        cityName: "Bandung",
        lat: -6.9175,
        ion: 107.6191,
        temperature: 25.0,
        description: "Rainy",
        humidity: 83.0,
        windSpeed: 9.0,
        source: "USER",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        cityName: "Surabaya",
        lat: -7.2575,
        ion: 112.7521,
        temperature: 31.0,
        description: "Clear sky",
        humidity: 70.0,
        windSpeed: 16.0,
        source: "USER",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Remove all seeded data in reverse order
    await queryInterface.bulkDelete("UserWeathers", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
    await queryInterface.bulkDelete("Weather", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
    await queryInterface.bulkDelete("Users", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
