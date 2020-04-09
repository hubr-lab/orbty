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
const bodyParser = require("body-parser");
const staticFiles = require("serve-static");
const HttpException = require("./exceptions/httpException");

/**
 * Path not mapped error function
 * Send not found error with default message to client
 * @param {IncomingMessage} request - HTTP server request
 * @param {ServerResponse} response - HTTP server response
 */
function onMissingPathError(request, response) {
  response.status(404).send(`Not Found to ${request.method} ${request.url}`);
}

/**
 * Orbty application class
 * @public
 */
class Orbty extends Routers {

  constructor() {
    super();
    this._instances = {};
    this._middlewares = [];
    this._withBaseMiddlewares = {};
  }

  /**
   * Native Body parser urlencoded integration
   * {@link https://www.npmjs.com/package/body-parser}
   */
  static get urlencoded() {
    return bodyParser.urlencoded;
  }

  /**
   * Native Body parser text integration
   * {@link https://www.npmjs.com/package/body-parser}
   */
  static get text() {
    return bodyParser.text;
  }

  /**
   * Native Body parser JSON integration
   * {@link https://www.npmjs.com/package/body-parser}
   */
  static get json() {
    return bodyParser.json;
  }

  /**
   * Native Body parser raw integration
   * {@link https://www.npmjs.com/package/body-parser}
   */
  static get raw() {
    return bodyParser.raw;
  }

  /**
   * Native Static file serve integration
   * {@link https://www.npmjs.com/package/serve-static}
   */
  static get static() {
    return staticFiles;
  }

  /**
   * Get default HTTP Exception class
   */
  static get HttpException() {
    return HttpException;
  }

  /**
   * Add geral capture error handler
   * @param {function} callback - Error handler
   */
  error(callback) {
    this.onErrorHandler = callback;
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

    return this;
  }

  /**
   * Default handler build function
   * @returns - server handler function
   * To custom servers use this funciton to set one handler on server
   * Ex.:
   * const http = require("http");
   * const Orbty = require("orbty");
   *
   * const application = new Orbty();
   * // implements orbty handlers...
   *
   * http.createServer(application.handler()).listen();
   */
  handler(request, response, ctx) {
    const startRequest = Date.now();
    let handlers = [];

    let processHandlers = [
      ...this._middlewares
    ];

    request.initialTime = startRequest;
    Object.setPrototypeOf(request, Request.prototype);
    Object.setPrototypeOf(response, Response.prototype);

    ctx = ctx || request.getUrlParse();

    const basePath = helpers.getBasePath(request.path = ctx.pathname);
    const match = this.match(request.method, ctx.pathname);

    if (this._withBaseMiddlewares[basePath]) {
      processHandlers.push(...this._withBaseMiddlewares[basePath]);
    }

    if (match) {
      handlers = match.handlers;
      request.params = match.params;
    } else if (this._instances[basePath]) {

      request.url = request.url.replace(basePath, "") || "/";
      request.path = request.path.replace(basePath, "") || "/";
      ctx.pathname = request.path;

      const instance = this._instances[basePath];

      handlers.push(
        instance.handler.bind(
          instance,
          request,
          response,
          ctx
        )
      );
    } else {
      handlers.push(onMissingPathError.bind(null, request, response));
    }

    request.query = ctx.query;

    if (Boolean(handlers.length) && !Boolean(processHandlers.length)) {
      return handlers[0](request, response);
    }

    processHandlers = [
      ...processHandlers,
      ...handlers
    ];

    const next = () => {
      perform();
    };

    const perform = async () => {
      if (response.finished) {
        return;
      }

      const [handler] = processHandlers.splice(0, 1);

      if (handler) {
        try {
          if (processHandlers.length === 0) {

            const result = await handler(request, response, next);

            if (!response.streaming) {
              response.send(result);
            }
          } else {
            await handler(request, response, next);
          }
        } catch(error) {
          if (this.onErrorHandler) {
            await this.onErrorHandler(error, request, response);
          }
          response.error(error);
        }
      }
    };

    perform();
  }

  listen(...args) {
    return http.createServer((req, res) => {
      this.handler(req, res);
    }).listen(...args);
  }
}

module.exports = Orbty;
