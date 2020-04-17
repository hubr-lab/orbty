const Orbty = require("..");
const request = require("supertest");

describe("Response send", () => {
  test("Should returns html any value", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (_req, res) => {
      res.send("<b>Title</b>");
    });

    request(orbty.server())
      .get("/foo")
      .expect(200, (err, res) => {
        expect(err).toBeNull();
        expect(res.text).toBe("<b>Title</b>");
        expect(
          res.headers["content-type"].includes("text/html")
        ).toBeTruthy();
        done();
      });
  });

  test("Should returns buffer", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (_req, res) => {
      res.send(new Buffer("bar"));
    });

    request(orbty.server())
      .get("/foo")
      .expect(200, (err, res) => {
        expect(err).toBeNull();
        expect(
          res.headers["content-type"].includes("application/octet-stream")
        ).toBeTruthy();
        done();
      });
  });

  test("Should returns buffer", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (_req, res) => {
      res.send(new Buffer("bar"));
    });

    request(orbty.server())
      .get("/foo")
      .expect(200, (err, res) => {
        expect(err).toBeNull();
        expect(
          res.headers["content-type"].includes("application/octet-stream")
        ).toBeTruthy();
        done();
      });
  });

  test("Should returns string function", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (_req, res) => {
      res.send(() => {});
    });

    request(orbty.server())
      .get("/foo")
      .expect(200, (err, res) => {
        expect(err).toBeNull();
        expect(
          res.headers["content-type"].includes("text/plain")
        ).toBeTruthy();
        done();
      });
  });

  test("Should returns valid object", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (_req, res) => {
      res.send({
        message: "This is awesome"
      });
    });

    request(orbty.server())
      .get("/foo")
      .expect(200, (err, res) => {
        expect(err).toBeNull();
        expect(res.body.message).toBe("This is awesome");
        expect(
          res.headers["content-type"].includes("application/json")
        ).toBeTruthy();
        done();
      });
  });

  test("Should returns number has any", (done) => {
    const orbty = new Orbty();

    orbty.get("/foo", (_req, res) => {
      res.send(25);
    });

    request(orbty.server())
      .get("/foo")
      .expect(200, (err, res) => {
        expect(err).toBeNull();
        expect(res.text).toBe("25");
        expect(
          res.headers["content-type"].includes("application/json")
        ).toBeTruthy();
        done();
      });
  });
});
