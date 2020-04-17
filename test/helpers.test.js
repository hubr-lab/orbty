/* !
* orbty
* Copyright(c) 2020 Gleisson Mattos
* http://github.com/gleissonmattos
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

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

    test("getPathRegex", () => {
      let regex = getPathRegex("/user/posts/:postId");
      expect("/user/posts/245").toMatch(regex.pattern);
      expect(regex.keys).toContain("postId");
      expect("/user/posts/").not.toMatch(regex.pattern);

      regex = getPathRegex("/user/posts");
      expect("/user/posts").toMatch(regex.pattern);
      expect(regex.keys).toHaveLength(0);
      expect("/user/post").not.toMatch(regex.pattern);

      regex = getPathRegex("/user/:userId/photos/:photoId");
      expect("/user/2/photos/12-home").toMatch(regex.pattern);
      expect(regex.keys).toHaveLength(2);
      expect(regex.keys).toContain("userId");
      expect(regex.keys).toContain("photoId");
      expect("/users/1/photos/2").not.toMatch(regex.pattern);
      expect("/user/photos/3").not.toMatch(regex.pattern);

      regex = getPathRegex("/user");
      expect("/user").toMatch(regex.pattern);
      expect(regex.keys).toHaveLength(0);
      expect("/").not.toMatch(regex.pattern);

      regex = getPathRegex("/");
      expect("/").toMatch(regex.pattern);
      expect(regex.keys).toHaveLength(0);
      expect("/user/post").not.toMatch(regex.pattern);

      regex = getPathRegex(new RegExp(/\w+/));
      expect("/any-here").toMatch(regex.pattern);

      regex = getPathRegex("*");
      expect("/all-here").toMatch(regex.pattern);
    });
  });
});
