const Orbty = require("..");
const request = require("supertest");

describe("Request header method", () => {

  test("Should return valid header", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (req) => {
      return req.header("user-agent");
    });

    request(orbty.server())
      .get("/foo")
      .set("user-agent", "Mozilla/5.0 (X11; Linux x86_64)")
      .expect(200, (err, { text }) => {
        expect(err).toBeNull();
        expect(text).toBe("Mozilla/5.0 (X11; Linux x86_64)");
        done();
      });
  });

  test("Should null to not existents header", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (req) => {
      return req.header("x-user-agent");
    });

    request(orbty.server())
      .get("/foo")
      .expect(200, (err, { text }) => {
        expect(err).toBeNull();
        expect(text).toBe("");
        done();
      });
  });

  test("Should fail by header is not", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (req) => req.header({}));

    request(orbty.server())
      .get("/foo")
      .expect(500, done);
  });

});
