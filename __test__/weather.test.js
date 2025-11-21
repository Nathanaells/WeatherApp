const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const axios = require("axios");
beforeAll(async () => {
  const data = [
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
    {
      country: "Japan",
      cityName: "Tokyo",
      lat: 35.6895,
      lon: 139.6917,
      temperature: 22.3,
      description: "Light rain",
      humidity: 65,
      windSpeed: 3.8,
      source: "API",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      country: "United States",
      cityName: "New York",
      lat: 40.7128,
      lon: -74.006,
      temperature: 18.6,
      description: "Clear sky",
      humidity: 55,
      windSpeed: 5.1,
      source: "API",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  await sequelize.queryInterface.bulkInsert("Weather", data, {});
});

describe("GET /weather", () => {
  describe("GET /weather - succeed", () => {
    it("should be return an array with message", async () => {
      const response = await request(app).get("/weather");
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("data", expect.any(Array));
    });
  });
});

describe("GET /weather/countries", () => {
  describe("GET /weather/countries - succeed", () => {
    it("should be return an array with message", async () => {
      const response = await request(app).get("/weather/countries");
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("countries", expect.any(Array));
    });
  });
});

describe("GET /weather/:country", () => {
  describe("GET /weather/:country - succeed", () => {
    it("should be return an array with message", async () => {
      const response = await request(app).get("/weather/country/United States");
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("country", expect.any(String));
      expect(response.body).toHaveProperty("cities", expect.any(Array));
    });
  });
});

jest.mock("axios");

describe("POST /weather/fetch", () => {
  it("should fetch and store weather data", async () => {
    // Mock the search API response
    axios.get.mockImplementation((url) => {
      if (url.includes("search.json")) {
        return Promise.resolve({
          data: [
            {
              name: "Jakarta",
              country: "Indonesia",
              lat: -6.2088,
              lon: 106.8456,
            },
          ],
        });
      }
      if (url.includes("current.json")) {
        return Promise.resolve({
          data: {
            current: {
              temp_c: 31.5,
              condition: { text: "Partly cloudy" },
              humidity: 70,
              wind_kph: 4.2,
            },
          },
        });
      }
    });

    const response = await request(app).post("/weather/fetch");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("totalCities");
  }, 30000); 
});

afterAll(async () => {
  await sequelize.queryInterface.bulkDelete("Weather", null, {
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
});
