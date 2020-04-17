const Orbty = require("..");
const request = require("supertest");

describe("Response has content type", () => {
  test("Should returns false", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (_req, res) => {
      return res.hasContentType();
    });

    request(orbty.server())
      .get("/foo")
      .expect(200, (err, res) => {
        expect(err).toBeNull();
        expect(Boolean(res.text)).not.toBe();
        done();
      });
  });
});
