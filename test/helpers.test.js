const { isOnlyNumber } = require("../lib/helpers/values");

describe("Helpers", () => {
	describe("values", () => {
		test("isOnlyNumber", () => {
			expect(isOnlyNumber("0123456789")).toBe(true);
			expect(isOnlyNumber("012345a789")).toBe(false);
			expect(isOnlyNumber("abcdfghyj")).toBe(false);
			expect(isOnlyNumber("1")).toBe(true);
			expect(isOnlyNumber("_1111a1")).toBe(false);
			expect(isOnlyNumber("1111a1")).toBe(false);
			expect(isOnlyNumber(" 55555 ")).toBe(false);
		});
	});
});