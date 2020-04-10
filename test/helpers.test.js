const { isOnlyNumber } = require("../lib/helpers/values");
const { getBasePath, getPathRegex, normalizeBasePath  } = require("../lib/helpers/url");

describe("Helpers", () => {
	describe("values", () => {
		test("isOnlyNumber", () => {
			expect(isOnlyNumber("0123456789")).toBe(true);
			expect(isOnlyNumber("012345a789")).toBe(false);
			expect(isOnlyNumber("abcdfghyj")).toBe(false);
			expect(isOnlyNumber("_1111a1")).toBe(false);
			expect(isOnlyNumber(" 55555 ")).toBe(false);
			expect(isOnlyNumber("1111a1")).toBe(false);
			expect(isOnlyNumber("1")).toBe(true);
		});
	});

	describe("url", () => {
		test("getBasePath: should get base path from url", () => {
			expect(getBasePath("/posts/summer?day=1")).toBe("/posts");
			expect(getBasePath("/user/posts")).toBe("/user");
			expect(getBasePath("user/posts")).toBe("/user");
			expect(getBasePath("/user")).toBe("/user");
			expect(getBasePath("user")).toBe("/user");
			expect(getBasePath("/")).toBe("/");
			expect(getBasePath("")).toBe("/");
		});

		test("normalizeBasePath", () => {
			expect(normalizeBasePath("")).toBe("/");
			expect(normalizeBasePath("users")).toBe("/users");
			expect(normalizeBasePath("/users")).toBe("/users");
			expect(normalizeBasePath("/users/posts/summer")).toBe("/users/posts/summer");
			expect(normalizeBasePath("users/posts/summer?day=1")).toBe("/users/posts/summer?day=1");
		});
	});
});