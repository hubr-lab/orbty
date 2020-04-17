const Orbty = require("..");
const request = require("supertest");

describe("Response status", () => {
  test("Should return changed status to 202", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (_req, res) => {
      res.status(202);
      return;
    });

    request(orbty.server())
      .get("/foo")
      .expect(202, (err, { statusCode }) => {
        expect(err).toBeNull();
        expect(statusCode).toBe(202);
        done();
      });
  });

  test("Should return changed status to 202", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (_req, res) => {
      res.status(204);
      return [];
    });

    request(orbty.server())
      .get("/foo")
      .expect(204, (err, res) => {
        expect(err).toBeNull();
        expect(res.text).toBe("");
        expect(res.body).toMatchObject({});
        expect(res.headers["content-type"]).toBe(undefined);
        expect(res.headers["content-length"]).toBe(undefined);
        expect(res.headers["transfer-encoding"]).toBe(undefined);
        done();
      });
  });
});
