const Orbty = require("..");
const request = require("supertest");

describe("Request connection", () => {

  test("Should return connection header", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (req) => req.language);

    request(orbty.server())
      .get("/foo")
      .set("language", "Pt-br")
      .expect(200, (err, { text }) => {
        expect(err).toBeNull();
        expect(text).toBe("Pt-br");
        done();
      });
  });
});
