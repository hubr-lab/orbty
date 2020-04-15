const Orbty = require("..");
const request = require("supertest");

describe("Response error", () => {

	test("Should returns generic error", (done) => {
		const orbty = new Orbty();

		orbty.get("/foo", (_req, res) => {
      res.stream(`${__dirname}/media/file`);
    });

		request(orbty.server())
			.get("/foo")
			.expect(200, done);
	});
});