const Orbty = require("..");
const request = require("supertest");

describe("Response redirect", () => {
  test("Should returns json object with correct header", (done) => {
    const orbty = new Orbty();

    orbty.get("/target", (_req, res) => {
      res.redirect("http://google.com");
    });

    orbty.get("/foo", (_req, res) => {
      res.redirect("/target");
    });

    request(orbty.server())
      .get("/foo")
      .expect(301, (err) => {
        expect(err).toBeNull();
        done();
      });
  });
});
