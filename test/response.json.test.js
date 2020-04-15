const Orbty = require("..");
const request = require("supertest");
const faker = require("faker");

describe("Response json", () => {
  test("Should returns json object with correct header", (done) => {
		const orbty = new Orbty();
		const title = faker.name.title();

		orbty.get("/foo", (_req, res) => {
      res.json({
				title,
			});
    });

		request(orbty.server())
			.get("/foo")
			.expect(200, (err, res) => {
				expect(err).toBeNull();
				expect(res.body.title).toBe(title);
				expect(
					res.headers["content-type"].includes("application/json")
				).toBeTruthy();
				done();
			});
	});
});