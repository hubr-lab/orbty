/*!
* orbty
* Copyright(c) 2020 Gleisson Mattos
* http://github.com/gleissonmattos
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

/**
* Validates and returns a mandatory environment variable.
* If it is not previously defined, the application will end with an exception
* @returns required environment value
* @throws {Error} An exception will be thrown if the environment
* variable has not been defined.
*/
module.exports = new Proxy(process.env, {
	get: (environments, properties) => {
		if (!(properties in environments) || !environments[String(properties)]) {
			throw new Error(`Required environment variable '${String(properties)}' is not defined`);
		}
		return environments[String(properties)];
	},
});