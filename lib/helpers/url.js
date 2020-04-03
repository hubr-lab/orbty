/*!
* orbty
* Copyright(c) 2020 Gleisson Mattos
* http://github.com/gleissonmattos
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

module.exports.normalizeBasePath = (part) => {
  return part.includes("/", 0) ? part : `/${part}`;
};

module.exports.getBasePath = (describePath) => {
  return (`/${
    describePath
      .split("/")
      .find(Boolean) || ""
  }`);
};

module.exports.getPathRegex = (path) => {

	const keys = [];

	if (path instanceof RegExp) {
		return {
			keys,
			pattern: path
		};
	}

	path = path
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
		.replace(/([\/.])/g, "\\$1")
		.replace(/\*/g, "(.*)");

	return {
		keys,
		pattern: new RegExp(`^${path}$`, 'i')
	};
};