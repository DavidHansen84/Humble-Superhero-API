const express = require("express");
const request = require("supertest");
const URL = "http://localhost:3000";

describe("testing superhero get ", () => {
  test("GET /superheroes - success", async () => {
    await request(URL).get("/superheroes");
    const { body } = await request(URL).get("/superheroes");
    expect(body).toHaveProperty("superheroes");
    expect(body.title).toEqual("Humble Superheroes");
  });
});
