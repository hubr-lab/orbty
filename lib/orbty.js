/* !
* orbty
* Copyright(c) 2020 Gleisson Mattos
* http://github.com/gleissonmattos
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

const http = require("http");
const Routers = require("./routers");
const Request = require("./request");
const Response = require("./response");
const helpers = require("./helpers/url");
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
   * @returns body-parser url encoded package
   */
  static get urlencoded() {
    return bodyParser.urlencoded;
  }

  /**
   * Native Body parser text integration
   * {@link https://www.npmjs.com/package/body-parser}
   * @returns body-parser text package
   */
  static get text() {
    return bodyParser.text;
  }

  /**
   * Native Body parser JSON integration
   * {@link https://www.npmjs.com/package/body-parser}
   * @returns body-parser json package
   */
  static get json() {
    return bodyParser.json;
  }

  /**
   * Native Body parser raw integration
   * {@link https://www.npmjs.com/package/body-parser}
   * @returns body-parser raw package
   */
  static get raw() {
    return bodyParser.raw;
  }

  /**
   * Native Static file serve integration
   * {@link https://www.npmjs.com/package/serve-static}
   * @returns serve-static module
   */
  static get static() {
    return staticFiles;
  }

  /**
   * Get Request class
   */
  static get Request() {
    return Request;
  }

  /**
   * Get Request class
   */
  static get Response() {
    return Response;
  }

  /**
   * Get default HTTP Exception class
   * @returns Http exception Error class
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
        ...(handlers.map(h => {
          return h instanceof Orbty ? (req, res) => h.handler(req, res) : h;
        }))
      ];
    } else {
      basePath = helpers.normalizeBasePath(basePath);
      handlers.forEach(handler => {
        // TODO: Implements dinamic url support to orbty instance
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

  match(method, pathname) {
    const match = super.match(method, pathname);
    const basePath = helpers.getBasePath(pathname);

    if (match) {
      return match;
    } else if (this._instances[basePath]) {
      return this._instances[basePath];
    }

    return null;
  }

  /**
   * Get the orbty handler
   */
  server() {
    return this.handler.bind(this);
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
    let instanceHandler = false;

    let processHandlers = [
      ...this._middlewares
    ];

    request.originalUrl = request.originalUrl || request.url;
    request.baseUrl = request.baseUrl || "";

    Object.setPrototypeOf(request, Request.prototype);
    Object.setPrototypeOf(response, Response.prototype);
    request.time = startRequest;

    ctx = ctx || request.getUrlParse();

    const basePath = helpers.getBasePath(request.path = ctx.pathname);

    if (this._withBaseMiddlewares[basePath]) {
      processHandlers.push(...this._withBaseMiddlewares[basePath]);
    }

    const match = this.match(request.method, ctx.pathname);
    instanceHandler = match instanceof Orbty;

    if (instanceHandler) {
      request.url = request.url.replace(basePath, "") || "/";
      request.path = request.path.replace(basePath, "") || "/";
      ctx.pathname = request.path;

      handlers.push(
        match.handler.bind(
          match,
          request,
          response,
          ctx
        )
      );
    } else if (match) {
      handlers = match.handlers;
      request.params = match.params;
    } else {
      handlers.push(onMissingPathError);
    }

    request.query = ctx.query;

    processHandlers = [
      ...processHandlers,
      ...handlers
    ];

    const next = () => {
      perform();
    };

    request.next = next;

    const perform = () => {
      if (response.finished) {
        return;
      }

      const [handler] = processHandlers.splice(0, 1);

      if (handler) {
        try {
          if (processHandlers.length === 0) {
            Promise.resolve(handler(request, response, next))
              .then(result => {
                if (!instanceHandler && !response.streaming) {
                  response.send(result);
                }
              }).catch(error => {
                response.error(error);
              });
          } else {
            Promise.resolve(handler(request, response, next)).catch(error => {
              response.error(error);
            });
          }
        } catch(error) {
          if (this.onErrorHandler) {
            this.onErrorHandler(error, request, response, next).then(() => {
              response.error(error);
            });
          } else {
            response.error(error);
          }
        }
      }
    };

    perform();
  }

  listen(args) {
    return http.createServer(this.handler.bind(this)).listen(args);
  }
}

module.exports = Orbty;
