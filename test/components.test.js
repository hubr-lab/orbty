const { Request, HttpException } = require("..");

describe("Orbty components", () => {
	test("Request", () => {
		expect(() => new Request()).not.toThrowError();
	});

	test("Response", () => {
		expect(() => {
			throw new HttpException();
		}).toThrowError(HttpException);
	});
});