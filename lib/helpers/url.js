/* !
* orbty
* Copyright(c) 2020 Gleisson Mattos
* http://github.com/gleissonmattos
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

/**
 * Response JSON content to request
 * @param {String} part - Normalize base path
 * @returns {String}
 * Case part url "/foo" return "/foo"
 * Case part url "foo" return "/foo"
 */
module.exports.normalizeBasePath = (part) => {
  return part.startsWith("/") ? part : `/${part}`;
};

/**
 * Get base path from URL
 * @param {String} describePath
 * @returns {String} URL base path
 */
module.exports.getBasePath = (describePath) => {
  return (`/${
    describePath
      .split("/")
      .find(Boolean) || ""
  }`);
};

/**
 * Get URL regex
 * @param {String} path
 * @returns {String} URL parsed to regex
 */
module.exports.getPathRegex = (url) => {

  const keys = [];

  if (url instanceof RegExp) {
    return {
      keys,
      pattern: url
    };
  }

  url = url
    .concat("/?")
    .replace(/\/\(/g, "(?:/")
    .replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?|\*/g, (match, offset, string, key, capture, opt) => {

      if (match === "*"){
        return match;
      }

      keys.push(key);

      offset = offset || "";
      return `${(opt ? "" : offset)}(?:${(opt ? offset : "")}${(string || "")}${(capture || "([^/]+?)")})${(opt || "")}`;
    })
    .replace(/([/.])/g, "\\$1")
    .replace(/\*/g, "(.*)");

  return {
    keys,
    pattern: new RegExp(`^${url}$`, 'i')
  };
};
