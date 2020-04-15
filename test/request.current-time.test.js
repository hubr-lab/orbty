const Orbty = require("..");
const request = require("supertest");

describe("Request current time", () => {

  test("Should current type diff number", (done) => {
		const orbty = new Orbty();

		orbty.get("/foo", (req) => {
			return req.getCurrentRequestTime();
		});

		request(orbty.server())
			.get("/foo")
			.expect(200, (err, { text }) => {
				expect(err).toBeNull();
				expect(Number(text) >= 0).toBeTruthy();
				done();
			});
	});

	test("Should returns initial request time", (done) => {
		const orbty = new Orbty();

		orbty.get("/foo", (req) => req.initialTime);

		request(orbty.server())
			.get("/foo")
			.expect(200, (err, { text }) => {
				expect(err).toBeNull();
				expect(Number(text) >= 0).toBeTruthy();
				done();
			});
	});
});