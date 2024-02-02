const request = require("supertest");
const express = require("express");
const app = require("../app.js");

describe("Express app", () => {
  it("should respond with a welcome message at /api/v1", async () => {
    const response = await request(app).get("/api/v1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "From API Server: Hello World" });
  });
});
