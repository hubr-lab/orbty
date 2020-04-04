/*!
* orbty
* Copyright(c) 2020 Gleisson Mattos
* http://github.com/gleissonmattos
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

const { getPathRegex } = require("./helpers/url");

module.exports = class Routers {
	constructor() {
		this._routers = [];
	}

	get(path, ...handler) {
		this.create("GET", path, handler);
	}

	post(path, ...handler) {
		this.create("POST", path, handler);
	}

	put(path, ...handler) {
		this.create("PUT", path, handler);
	}

	delete(path, ...handler) {
		this.create("DELETE", path, handler);
	}

	options(path, ...handler) {
		this.create("OPTIONS", path, handler);
	}

	head(path, ...handler) {
		this.create("HEAD", path, handler);
	}

	patch(path, ...handler) {
		this.create("PATCH", path, handler);
	}

	connect(path, ...handler) {
		this.create("CONNECT", path, handler);
	}

	trace(path, ...handler) {
		this.create("TRACE", path, handler);
	}

	checkout(path, ...handler) {
		this.create("CHECKOUT", path, handler);
	}

	copy(path, ...handler) {
		this.create("COPY", path, handler);
	}

	lock(path, ...handler) {
		this.create("LOCK", path, handler);
	}

	merge(path, ...handler) {
		this.create("MERGE", path, handler);
	}

	mkactivity(path, ...handler) {
		this.create("MKACTIVITY", path, handler);
	}

	mkcol(path, ...handler) {
		this.create("MKCOL", path, handler);
	}

	move(path, ...handler) {
		this.create("MOVE", path, handler);
	}

	"m-search"(path, ...handler) {
		this.create("M-SEARCH", path, handler);
	}

	notify(path, ...handler) {
		this.create("NOTIFY", path, handler);
	}

	propfind(path, ...handler) {
		this.create("PROPFIND", path, handler);
	}

	proppatch(path, ...handler) {
		this.create("PROPPATCH", path, handler);
	}

	purge(path, ...handler) {
		this.create("PURGE", path, handler);
	}

	report(path, ...handler) {
		this.create("REPORT", path, handler);
	}

	search(path, ...handler) {
		this.create("SEARCH", path, handler);
	}

	subscribe(path, ...handler) {
		this.create("SUBSCRIBE", path, handler);
	}

	unlock(path, ...handler) {
		this.create("UNLOCK", path, handler);
	}

	unsubscribe(path, ...handler) {
		this.create("UNSUBSCRIBE", path, handler);
	}

	all(path, ...handler) {
		this.create(null, path, handler);
	}

	create(method, route, ...handlerFunction) {

		const {
			keys: params,
			pattern
		} = getPathRegex(route);

		const handlers = [].concat.apply([], handlerFunction);

		this._routers.push({
			params,
			pattern,
			method,
			handlers
		});
	}

	/**
	 * Check URL match with registered
	 * Convert URL paths in params if exists
	 * @param {String} method - HTTP method
	 * @param {*} url - Request URL
	 */
	match(method, url) {

		let handlers = [];
		let matches = [];
		let params = {};

		for (const route of this._routers) {

			if (route.method === method || (route.method === "GET" && method === "HEAD") || !route.method) {
				if (!Boolean(route.params.length)) {

					matches = route.pattern.exec(url);

					if (!matches) {
						continue;
					}

					if (matches.groups) {
						for (const key in matches.groups) {
							params[key] = matches.groups[key];
						}
					}

					handlers.push(...route.handlers);
				} else if (Boolean(route.params.length)) {

					matches = route.pattern.exec(url);

					if (!matches) {
						continue;
					}

					for (let j = 0; j < route.params.length;) {
						params[route.params[j]] = matches[++j];
					}

					handlers.push(...route.handlers);
				} else if (route.pattern.test(url)) {
					handlers.push(...route.handlers);
				}
			} // else not a match
		}

		if (Boolean(handlers.length)) {
			return {
				params,
				handlers
			};
		}

		return null;
	}
};