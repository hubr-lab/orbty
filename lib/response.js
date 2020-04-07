/*!
* orbty
* Copyright(c) 2020 Gleisson Mattos
* http://github.com/gleissonmattos
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

const http = require("http");
const fs = require("fs");
const HttpException = require("./exceptions/httpException");
const { isOnlyNumber } = require("./helpers/values");

const NO_CONTENT_STATUS = [204, 304];

/**
 * Prepare response to send buffer
 * @param {Response} response - Orbty Response object
 * @param {Buffer} payload - response buffer payload
 * @returns buffer payload prepared
 */
function prepareBuffer(response, payload) {
  if (!response.hasContentType()) {
    response.setHeader("Content-Type", "application/octet-stream");
  }
  return payload;
}

/**
 * Prepare response to send object
 * @param {Response} response - Orbty Response object
 * @param {Object} payload - response object payload
 * @returns object response prepared
 */
function prepareObject(response, body) {
  if (!response.hasContentType()) {
    response.setHeader("Content-Type", "application/json;charset=utf-8");
  }
  return JSON.stringify(body);
}

/**
 * Prepare response to send any function
 * @param {Response} response - Orbty Response object
 * @param {Function} payload - response function payload
 * @returns function response prepared
 */
function prepareFunction(response, body) {
  if (!response.hasContentType()) {
    response.setHeader("Content-Type", "Content-Type", "text/plain;charset=utf-8");
  }
  return body.toString();
}

/**
 * Prepare response to send plain text
 * @param {Response} response - Orbty Response object
 * @param {string} payload - response function payload
 * @returns function response prepared
 */
function preparePlain(response, body) {
  if (!response.hasContentType()) {
    response.setHeader("Content-Type", "Content-Type", "text/plain;charset=utf-8");
  }
  return String(body);
}

/**
 * Prepare response to send any payload
 * @param {Response} response - Orbty Response object
 * @param {any} payload - response any payload
 * @returns any response prepared parsed to string
 */
function prepareAny(response, body) {
  response.setHeader("Content-Type", "application/json;charset=utf-8");
  return String(body);
}

/**
 * Server Response class
 * @public
 */
class Response extends http.ServerResponse {
  constructor () {
    super();
  }

  /**
   * Set response status code
   * @param {Number} statusCode
   */
  status(statusCode) {
    this.statusCode = statusCode;
    return this;
  }

  /**
   * Send JSON content
   * @param {*} body
   */
  json(body) {
    this.setHeader("Content-Type", "application/json;charset=utf-8");
    this.send(body);
  }

  /**
   * Send plain text content
   * @param {*} body
   */
  plain(body) {
    this.setHeader("Content-Type", "text/plain");

    if (typeof body !== "string") {
      body = JSON.stringify(body);
    }

    this.send(body);
  }

  /**
   * Send status code text
   * Ex.:
   * respose.sendStatus(200); // Send "OK"
   * @param {Number} code
   */
  sendStatus(code) {
    if (!["number", "string"].includes(typeof code)) {
      throw new Error("Status code must be a string or a number");
    }

    if (!isOnlyNumber(code)) {
      throw new Error("Status code is not only number");
    }

    this.statusCode = code;
    this.send(http.STATUS_CODES[String(code)] || code);
  }

  /**
   * Basic address location redirect
   * @param {String} url - External URL ou internal path string
   */
  redirect(url) {
    this.writeHead(301, { Location: url }).end();
  }

  hasContentType() {
    return Boolean(this.getHeader("Content-Type"));
  }

  /**
   * Send body response
   * @param {*} body
   */
  send(body) {

    if (this.finished) {
      return;
    }

    if (body) {
      if (Buffer.isBuffer(body) || typeof body.pipe === "function") {
        body = prepareBuffer(this, body);
      } else if (typeof body === "object") {
        body = prepareObject(this, body);
      } else if (typeof body === "function") {
        body = prepareFunction(this, body);
      } else if (typeof body === "string") {
        body = preparePlain(this, body);
      } else {
        body = prepareAny(this, body);
      }

      if (this.statusCode >= 200 && !NO_CONTENT_STATUS.includes(this.statusCode)) {
        this.setHeader("Content-Length", Buffer.byteLength(body));
      }
      this.write(body);
    }

    this.end();
  }

  /**
   * Send error
   * @param {string} filePath
   */
  error(error) {
    if (error instanceof HttpException) {
      this.status(error.code).send(error.message || String(error));
    } else {
      this.status(500).send(error ? (error.message || String(error)) : "");
    }
  }

  /**
   * Send file basic stream by existing file server path
   * @param {string} filePath
   */
  stream(filePath) {
    const file = fs.createReadStream(filePath);
    this.status(200);

    const onEnd = () => {
      this.streaming = false;
    };

    file.on("end", onEnd);

    this.streaming = true;
    file.pipe(this);
  }
}

module.exports = Response;