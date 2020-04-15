const Orbty = require("..");
const request = require("supertest");

describe("Request connection", () => {

  test("Should return connection header", (done) => {
		const orbty = new Orbty();

		orbty.get("/foo", (req) => req.accept);

		request(orbty.server())
			.get("/foo")
			.set("accept", "text/html")
			.expect(200, (err, { text }) => {
				expect(err).toBeNull();
				expect(text).toBe("text/html");
				done();
			});
	});
});