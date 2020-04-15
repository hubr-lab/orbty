const Orbty = require("..");
const request = require("supertest");

describe("Request connection", () => {

  test("Should return connection header", (done) => {
		const orbty = new Orbty();

		orbty.get("/foo", (req) => req.agent);

		request(orbty.server())
			.get("/foo")
			.set("user-agent", "Mozilla/5.0 (X11; Linux x86_64)")
			.expect(200, (err, { text }) => {
				expect(err).toBeNull();
				expect(text).toBe("Mozilla/5.0 (X11; Linux x86_64)");
				done();
			});
	});
});