const Orbty = require("..");
const request = require("supertest");
const faker = require("faker");

describe("Response plain", () => {
  test("Should returns plain value with correct header", (done) => {
		const orbty = new Orbty();
		const title = faker.name.title();

		orbty.get("/foo", (_req, res) => {
      res.plain(title);
    });

		request(orbty.server())
			.get("/foo")
			.expect(200, (err, res) => {
				expect(err).toBeNull();
				expect(res.text).toBe(title);
				expect(
					res.headers["content-type"].includes("text/plain")
				).toBeTruthy();
				done();
			});
	});

	test("Should returns plain array items", (done) => {
		const orbty = new Orbty();
		const title = faker.name.title();

		orbty.get("/foo", (_req, res) => {
      res.plain(["a", "b"]);
    });

		request(orbty.server())
			.get("/foo")
			.expect(200, (err, res) => {
				expect(err).toBeNull();
				expect(res.text).toBe("a,b");
				expect(
					res.headers["content-type"].includes("text/plain")
				).toBeTruthy();
				done();
			});
	});
});