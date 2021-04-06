/* !
* orbty
* Copyright(c) 2020 Gleisson Mattos
* http://github.com/gleissonmattos
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

const { getPathRegex } = require("./helpers/url");
const http = require('http');

module.exports = class Routers extends http.Server {
  constructor() {
    super();
    this._routers = [];
  }

  get(path, ...handler) {
    return this.create("GET", path, handler);
  }

  post(path, ...handler) {
    return this.create("POST", path, handler);
  }

  put(path, ...handler) {
    return this.create("PUT", path, handler);
  }

  delete(path, ...handler) {
    return this.create("DELETE", path, handler);
  }

  options(path, ...handler) {
    return this.create("OPTIONS", path, handler);
  }

  head(path, ...handler) {
    return this.create("HEAD", path, handler);
  }

  patch(path, ...handler) {
    return this.create("PATCH", path, handler);
  }

  connect(path, ...handler) {
    return this.create("CONNECT", path, handler);
  }

  trace(path, ...handler) {
    return this.create("TRACE", path, handler);
  }

  checkout(path, ...handler) {
    return this.create("CHECKOUT", path, handler);
  }

  copy(path, ...handler) {
    return this.create("COPY", path, handler);
  }

  lock(path, ...handler) {
    return this.create("LOCK", path, handler);
  }

  merge(path, ...handler) {
    return this.create("MERGE", path, handler);
  }

  mkactivity(path, ...handler) {
    return this.create("MKACTIVITY", path, handler);
  }

  mkcol(path, ...handler) {
    return this.create("MKCOL", path, handler);
  }

  move(path, ...handler) {
    return this.create("MOVE", path, handler);
  }

  "m-search"(path, ...handler) {
    return this.create("M-SEARCH", path, handler);
  }

  notify(path, ...handler) {
    return this.create("NOTIFY", path, handler);
  }

  propfind(path, ...handler) {
    return this.create("PROPFIND", path, handler);
  }

  proppatch(path, ...handler) {
    return this.create("PROPPATCH", path, handler);
  }

  purge(path, ...handler) {
    return this.create("PURGE", path, handler);
  }

  report(path, ...handler) {
    return this.create("REPORT", path, handler);
  }

  search(path, ...handler) {
    return this.create("SEARCH", path, handler);
  }

  subscribe(path, ...handler) {
    return this.create("SUBSCRIBE", path, handler);
  }

  unlock(path, ...handler) {
    return this.create("UNLOCK", path, handler);
  }

  unsubscribe(path, ...handler) {
    return this.create("UNSUBSCRIBE", path, handler);
  }

  all(path, ...handler) {
    return this.create(null, path, handler);
  }

  create(method, route, ...handlerFunction) {

    if (typeof route !== "string" && !(route instanceof RegExp)) {
      throw new Error(`First path param on '${method.toLowerCase()}' cannot be string or valid RegExp`);
    }

    const {
      keys: params,
      pattern
    } = getPathRegex(route);

    const handlers = [].concat.apply([], handlerFunction);

    this._routers.push({
      params,
      pattern,
      method,
      route,
      handlers
    });

    return this;
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
        if (!route.params.length) {

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
        } else if (route.params.length) {

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

    if (handlers.length) {
      return {
        params,
        handlers
      };
    }

    return null;
  }
};
