const Orbty = require("..");
const request = require("supertest");

describe("Response HTTP status", () => {
  test("Should returns HTTP status", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (_req, res) => {
      res.sendStatus(201);
    });

    request(orbty.server())
      .get("/foo")
      .expect(201, (err, res) => {
        expect(err).toBeNull();
        expect(res.text).toBe("Created");
        done();
      });
  });

  test("Should returns only number to not found status", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (_req, res) => {
      res.sendStatus(720);
    });

    request(orbty.server())
      .get("/foo")
      .expect(720, (err, res) => {
        expect(err).toBeNull();
        expect(res.text).toBe("720");
        done();
      });
  });

  test("Should returns status 'ok' message", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (_req, res) => {
      res.sendStatus("200");
    });

    request(orbty.server())
      .get("/foo")
      .expect(200, (err, res) => {
        expect(err).toBeNull();
        expect(res.text).toBe("OK");
        done();
      });
  });

  test("Should fail if try send object instead of object", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (_req, res) => {
      res.sendStatus({});
    });

    request(orbty.server())
      .get("/foo")
      .expect(500, done);
  });

  test("Should fail se try send dont only number string", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (_req, res) => {
      res.sendStatus("3455aaa");
    });

    request(orbty.server())
      .get("/foo")
      .expect(500, done);
  });

  test("Should fail se try send invalid status value", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (_req, res) => {
      res.sendStatus(-204);
    });

    request(orbty.server())
      .get("/foo")
      .expect(500, done);
  });
});
