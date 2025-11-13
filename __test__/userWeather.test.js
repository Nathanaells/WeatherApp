const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { hashPassword } = require("../helper/bcrypt");
const { signToken } = require("../helper/jwt");
const axios = require("axios");

jest.mock("axios");

let access_token;
let other_access_token;
let userId = 1;
let userId2 = 2;

let otherUserId = 2;
let userWeatherId;

beforeAll(async () => {
  const usersData = [
    {
      username: "testuser",
      email: "test@example.com",
      password: hashPassword("password123"),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: "otheruser",
      email: "other@example.com",
      password: hashPassword("password123"),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  await sequelize.queryInterface.bulkInsert("Users", usersData, {});

  // Generate access tokens
  access_token = signToken({ id: userId });
  other_access_token = signToken({ id: otherUserId });

  // Create test weather data
  const weatherData = [
    {
      country: "Indonesia",
      cityName: "Jakarta",
      lat: -6.2088,
      lon: 106.8456,
      temperature: 31.5,
      description: "Partly cloudy",
      humidity: 70,
      windSpeed: 4.2,
      source: "API",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  await sequelize.queryInterface.bulkInsert("Weather", weatherData, {});

  const userWeatherData = [
    {
      userId: userId,
      country: "Indonesia",
      cityName: "Jakarta",
      lat: -6.2088,
      lon: 106.8456,
      temperature: 30.0,
      description: "Sunny",
      humidity: 65,
      windSpeed: 3.5,
      vote: 5,
      source: "USER",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: otherUserId,
      country: "Indonesia",
      cityName: "Jakarta",
      lat: -6.2088,
      lon: 106.8456,
      temperature: 30.0,
      description: "Sunny",
      humidity: 65,
      windSpeed: 3.5,
      vote: 5,
      source: "USER",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  await sequelize.queryInterface.bulkInsert(
    "UserWeathers",
    userWeatherData,
    {}
  );

  // Get the ID of the created user weather (assuming auto-increment starts at 1)
  userWeatherId = 1;
});

afterAll(async () => {
  await sequelize.queryInterface.bulkDelete("UserWeathers", null, {
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  await sequelize.queryInterface.bulkDelete("Weather", null, {
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  await sequelize.queryInterface.bulkDelete("Users", null, {
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
  await sequelize.close();
});

describe("UserWeather Endpoints", () => {
  describe("GET /user-weather", () => {
    describe("Success", () => {
      it("should return all user weather reports with user info", async () => {
        const response = await request(app)
          .get("/user-weather")
          .set("Authorization", `Bearer ${access_token}`);

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toHaveProperty("id");
        expect(response.body[0]).toHaveProperty("userId");
        expect(response.body[0]).toHaveProperty("cityName");
        expect(response.body[0]).toHaveProperty("temperature");
        expect(response.body[0]).toHaveProperty("votes");
        expect(response.body[0]).toHaveProperty("User");
        expect(response.body[0].User).toHaveProperty("username");
        expect(response.body[0].User).toHaveProperty("email");
      });
    });

    describe("Fail", () => {
      it("invalid Bearer Token", async () => {
        const response = await request(app)
          .get("/user-weather")
          .set("Authorization", `Bearer invalidtoken123`);

        // This should still work since GET doesn't require auth
        // But if your route requires auth, adjust accordingly
        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty(
          "message",
          "You are not authorized"
        );
      });
    });
  });

  describe("POST /user-weather", () => {
    describe("Success", () => {
      it("should create user weather report for existing city", async () => {
        const newReport = {
          country: "Indonesia",
          cityName: "Jakarta",
          lat: -6.2088,
          lon: 106.8456,
          temperature: 32.0,
          description: "Very hot",
          humidity: 75,
          windSpeed: 4.0,
        };

        const response = await request(app)
          .post("/user-weather")
          .set("Authorization", `Bearer ${access_token}`)
          .send(newReport);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("userId", userId);
        expect(response.body).toHaveProperty("cityName", "Jakarta");
        expect(response.body).toHaveProperty("temperature", 32.0);
        expect(response.body).toHaveProperty("source", "USER");
      });

      it("should create user weather report for new city (with API call)", async () => {
        const newReport = {
          country: "Indonesia",
          cityName: "Jakarta",
          lat: -6.9175,
          lon: 107.6191,
          temperature: 28.0,
          description: "Cool",
          humidity: 70,
          windSpeed: 3.0,
        };

        const response = await request(app)
          .post("/user-weather")
          .set("Authorization", `Bearer ${access_token}`)
          .send(newReport);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("cityName");
      });
    });

    describe("Fail", () => {
      it("should return 401 if no token provided", async () => {
        const newReport = {
          country: "Indonesia",
          cityName: "Jakarta",
          temperature: 32.0,
          description: "Hot",
          humidity: 75,
          windSpeed: 4.0,
        };

        const response = await request(app)
          .post("/user-weather")
          .send(newReport);

        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty(
          "message",
          "You are not authorized"
        );
      });

      it("should return 404 if city not found in API", async () => {
        axios.get.mockResolvedValue({ data: [] });

        const newReport = {
          country: "Indonesia",
          cityName: "InvalidCity",
          lat: 0,
          lon: 0,
          temperature: 30.0,
          description: "Test",
          humidity: 70,
          windSpeed: 3.0,
        };

        const response = await request(app)
          .post("/user-weather")
          .set("Authorization", `Bearer ${access_token}`)
          .send(newReport);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("message", "City not found");
      });

      it("should return 400 for validation errors", async () => {
        const newReport = {
          country: "Indonesia",
          cityName: "Jakarta",
        };

        const response = await request(app)
          .post("/user-weather")
          .set("Authorization", `Bearer ${access_token}`)
          .send(newReport);

        expect(response.status).toBe(400);
      });
    });
  });

  describe("PUT /user-weather/:id", () => {
    describe("Success", () => {
      it("should update user weather report by owner", async () => {
        const updates = {
          temperature: 33.0,
          description: "Extremely hot",
          humidity: 80,
          windSpeed: 5.0,
        };

        const response = await request(app)
          .put(`/user-weather/${userWeatherId}`)
          .set("Authorization", `Bearer ${access_token}`)
          .send(updates);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("temperature", 33.0);
        expect(response.body).toHaveProperty("description", "Extremely hot");
        expect(response.body).toHaveProperty("humidity", 80);
      });
    });

    describe("Fail", () => {
      it("should return 401 if no token provided", async () => {
        const updates = {
          temperature: 33.0,
          description: "Hot",
          humidity: 80,
          windSpeed: 5.0,
        };

        const response = await request(app)
          .put(`/user-weather/${userWeatherId}`)
          .send(updates);

        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty(
          "message",
          "You are not authorized"
        );
      });

      it("should return 403 if user is not the owner", async () => {
        const updates = {
          temperature: 33.0,
          description: "Hot",
          humidity: 80,
          windSpeed: 5.0,
        };

        const response = await request(app)
          .put(`/user-weather/${userWeatherId}`)
          .set("Authorization", `Bearer ${other_access_token}`)
          .send(updates);

        expect(response.status).toBe(403);
        expect(response.body).toHaveProperty(
          "message",
          "You do not have access to this resource"
        );
      });

      it("should return 404 if weather report not found", async () => {
        const updates = {
          temperature: 33.0,
          description: "Hot",
          humidity: 80,
          windSpeed: 5.0,
        };

        const response = await request(app)
          .put("/user-weather/99999")
          .set("Authorization", `Bearer ${access_token}`)
          .send(updates);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("message");
      });
    });
  });

  describe("DELETE /user-weather/:id", () => {
    let deleteTestId = 2; // Assuming sequential IDs

    beforeEach(async () => {
      // Create a weather report to delete
      const weatherToDelete = [
        {
          userId: userId,
          country: "Indonesia",
          cityName: "Surabaya",
          lat: -7.2575,
          lon: 112.7521,
          temperature: 31.0,
          description: "Hot",
          humidity: 70,
          windSpeed: 4.0,
          vote: 0,
          source: "USER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      await sequelize.queryInterface.bulkInsert(
        "UserWeathers",
        weatherToDelete,
        {}
      );
      deleteTestId++;
    });

    describe("Success", () => {
      it("should delete user weather report by owner", async () => {
        const response = await request(app)
          .delete(`/user-weather/${deleteTestId}`)
          .set("Authorization", `Bearer ${access_token}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty(
          "message",
          "Weather report deleted successfully"
        );
      });
    });

    describe("Fail", () => {
      it("should return 401 if no token provided", async () => {
        const response = await request(app).delete(
          `/user-weather/${deleteTestId}`
        );

        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty(
          "message",
          "You are not authorized"
        );
      });

      it("should return 403 if user is not the owner", async () => {
        const response = await request(app)
          .delete(`/user-weather/${deleteTestId}`)
          .set("Authorization", `Bearer ${other_access_token}`);

        expect(response.status).toBe(403);
        expect(response.body).toHaveProperty(
          "message",
          "You do not have access to this resource"
        );
      });

      it("should return 404 if weather report not found", async () => {
        const response = await request(app)
          .delete("/user-weather/99999")
          .set("Authorization", `Bearer ${access_token}`);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("message");
      });
    });
  });

  describe("PATCH /user-weather/:id", () => {
    describe("Success", () => {
      it("should increment vote count", async () => {
        const response = await request(app)
          .patch(`/user-weather/2`)
          .set("Authorization", `Bearer ${access_token}`);

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
        // expect(response.body).toHaveProperty("votes", 1);
        // expect(response.body).toHaveProperty("id", voteTestId);
        // expect(response.body).toHaveProperty("User");
      });
    });

    describe("Fail", () => {
      it("should return 404 if weather report not found", async () => {
        const response = await request(app)
          .patch("/user-weather/99999")
          .set("Authorization", `Bearer ${access_token}`);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("message", "Resource not found");
      });

      it("should return 401 - Invalid Bearer Token", async () => {
        const response = await request(app)
          .patch("/user-weather/99999")
          .set("Authorization", `Bearer ahwhdawdawdo`);

        expect(response.status).toBe(401);
      });
    });
  });
});
