const Orbty = require("..");

describe("Routes rules", () => {
  test("Params", () => {
		const orbty = new Orbty();

		orbty.create("GET", "/users/:id", () => {});

		const { params } = orbty.match("GET", "/users/2");
		expect(params.id).toBe("2");
	});
});