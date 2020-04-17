const Orbty = require("..");
const request = require("supertest");

describe("Request URL parser", () => {
  test("Should parsed url object", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (req) => req.getUrlParse());

    request(orbty.server())
      .get("/foo")
      .expect(200, (err, { body }) => {
        expect(err).toBeNull();
        expect(body.path).toBe("/foo");
        done();
      });
  });
});
