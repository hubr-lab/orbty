const Orbty = require("..");
const request = require("supertest");

describe("Response error", () => {
  test("Should returns generic error", (done) => {
		const orbty = new Orbty();

		orbty.get("/foo", (_req, res) => {
      res.error(new Error("without"));
    });

		request(orbty.server())
			.get("/foo")
			.expect(500, done);
	});

	test("Should returns any like error", (done) => {
		const orbty = new Orbty();

		orbty.get("/foo", (_req, res) => {
      res.error({});
    });

		request(orbty.server())
			.get("/foo")
			.expect(500, done);
	});

	test("Should returns generic error", (done) => {
		const orbty = new Orbty();

		orbty.get("/foo", (_req, res) => {
      res.error(new Orbty.HttpException("without for yout", 401));
    });

		request(orbty.server())
			.get("/foo")
			.expect(401, done);
	});
});