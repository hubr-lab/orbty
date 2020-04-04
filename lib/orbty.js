/*!
* orbty
* Copyright(c) 2020 Gleisson Mattos
* http://github.com/gleissonmattos
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

const http = require("http");
const Routers = require("./routers");
const helpers = require("./helpers/url");
const Request = require("./request");
const Response = require("./response");

function onMissingPathError(req, res) {
  res.status(404).send(`Not Found to ${req.method} ${req.url}`);
}

class Orbty extends Routers {

  constructor() {
    super();
    this._instances = {};
    this._middlewares = [];
    this._withBaseMiddlewares = {};
  }

  use(basePath, ...handlers) {
    if (basePath instanceof Function) {
      this._middlewares = [
        ...this._middlewares,
        basePath,
        ...handlers
      ];
    } else if (basePath === "/") {
      this._middlewares = [
        ...this._middlewares,
        ...handlers
      ];
    } else {
      basePath = helpers.normalizeBasePath(basePath);
      handlers.forEach(handler => {
        if (handler instanceof Orbty) {
          this._instances[basePath] = handler;
        } else {
          const processHandlers = this._withBaseMiddlewares[basePath] || [];
          this._withBaseMiddlewares[basePath] = [
            ...processHandlers,
            handler
          ];
        }
      });
    }
  }

  handler() {
    return (req, res, ctx) => {
      let handlers = [];

      let processHandlers = [
        ...this._middlewares
      ];

      Object.setPrototypeOf(req, Request.prototype);
      Object.setPrototypeOf(res, Response.prototype);
      ctx = ctx || req.getUrlParse();

      const basePath = helpers.getBasePath(req.path = ctx.pathname);
      const match = this.match(req.method, ctx.pathname);

      if (this._withBaseMiddlewares[basePath]) {
        processHandlers.push(...this._withBaseMiddlewares[basePath]);
      }

      if (match) {
        handlers = match.handlers;
        req.params = match.params;
      } else if (this._instances[basePath]) {

        req.url = req.url.replace(basePath, "") || "/";
        req.path = req.path.replace(basePath, "") || "/";
        ctx.pathname = req.path;

        handlers.push(
          this._instances[basePath].handler(req, res, ctx)
        );
      }

      handlers.push(onMissingPathError);
      req.query = ctx.query;

      if (Boolean(handlers.length) && !Boolean(processHandlers.length)) {
        return handlers[0](req, res);
      }

      processHandlers = [
        ...processHandlers,
        ...handlers
      ];

      const next = () => {
        perform();
      };

      const perform = () => {
        if (res.finished) {
          return;
        }

        const [handler] = processHandlers.splice(0, 1);

        if (handler) {
          handler(req, res, next);
        }
      };

      perform();
    };
  }

  listen(...args) {
    return http.createServer(this.handler()).listen(...args);
  }
}

module.exports = Orbty;
