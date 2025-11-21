const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");

afterAll(async () => {
  await sequelize.queryInterface.bulkDelete("Users", null, {
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
});

describe("POST /users/register", () => {
  describe("POST /users/register - succeed", () => {
    it("should be return an object with message", async () => {
      const body = {
        username: "Nathan",
        email: "nathan@gmail.com",
        password: "nathan123",
      };
      const response = await request(app).post("/users/register").send(body);
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty(
        "message",
        "User registered successfully"
      );
    });
  });

  describe("POST /register - fail", () => {
    // error kalo email kosong
    it("should be return an object with error message", async () => {
      const body = { email: "", password: "12345" };
      const response = await request(app).post("/users/register").send(body);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("message", expect.any(String));
    });

    // error kalo password kosong
    it("should be return an object with error message", async () => {
      const body = { email: "test@mail.com", password: "" };
      const response = await request(app).post("/users/register").send(body);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("message", expect.any(String));
    });

    //Bukan Email
    it("should be return an object with error message", async () => {
      const body = { email: "test", password: "123455" };
      const response = await request(app).post("/users/register").send(body);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("message", expect.any(String));
    });

    //error password kurang dari 6
    it("should be return an object with error message", async () => {
      const body = { email: "test@gmail.com", password: "1234" };
      const response = await request(app).post("/users/register").send(body);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("message", expect.any(String));
    });
  });
});

describe("POST /users/login", () => {
  describe("POST /users/login - succeed", () => {
    it("should be return an object with access_token", async () => {
      const body = {
        email: "nathan@gmail.com",
        password: "nathan123",
      };
      const response = await request(app).post("/users/login").send(body);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("access_token", expect.any(String));
    });
  });

  describe("POST /users/login - failed", () => {
    it("should be return an object with message", async () => {
      const body = {
        email: "",
        password: "nathan123",
      };
      const response = await request(app).post("/users/login").send(body);
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty(
        "message",
        "Email and Password are required"
      );
    });

    it("should be return an object with message", async () => {
      const body = {
        email: "nathan@gmail.com",
        password: "",
      };
      const response = await request(app).post("/users/login").send(body);
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty(
        "message",
        "Email and Password are required"
      );
    });
    // Login Error
    it("should be return an object with message", async () => {
      const body = {
        email: "nathan@gmail.com",
        password: "",
      };
      const response = await request(app).post("/users/login").send(body);
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty(
        "message",
        "Email and Password are required"
      );
    });

    it("should be return an object with message", async () => {
      const body = {
        email: "nathanael@gmail.com",
        password: "123123",
      };
      const response = await request(app).post("/users/login").send(body);
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty(
        "message",
        "Invalid email or password"
      );
    });
  });
});
