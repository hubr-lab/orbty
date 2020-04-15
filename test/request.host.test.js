const Orbty = require("..");
const request = require("supertest");

describe("Request connection", () => {

  test("Should return connection header", (done) => {
		const orbty = new Orbty();

		orbty.get("/foo", (req) => req.host);

		request(orbty.server())
			.get("/foo")
			.set("host", "www.orbty-test.com")
			.expect(200, (err, { text }) => {
				expect(err).toBeNull();
				expect(text).toBe("www.orbty-test.com");
				done();
			});
	});
});