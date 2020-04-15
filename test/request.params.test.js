const Orbty = require("..");
const request = require("supertest");
const faker = require("faker");

describe("Request params", () => {
	test("Should response parsed params", (done) => {
		const orbty = new Orbty();
		const word = faker.name.firstName();
		const number = faker.random.number({ min: 1, max: 100});

		orbty.get("/foo/:bar/:tum", ({ params }) => {
			return params;
		});

		request(orbty.server())
			.get(
				`/foo/${word}/${number}`
			).expect(200, (err, { body }) => {
				expect(err).toBeNull();
				expect(body.bar).toBe(word);
				expect(body.tum).toBe(String(number));
				done();
			});
	});

	test("Should response empty params object", (done) => {
		const orbty = new Orbty();

		orbty.get("/foo", ({ params }) => {
			return params;
		});

		request(orbty.server())
			.get(
					"/foo"
			).expect(200, (err, { body }) => {
					expect(err).toBeNull();
					expect(body).toMatchObject({});
					done();
			});
	});
});