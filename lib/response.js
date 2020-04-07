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
    this.send(http.STATUS_CODES[code || String(code)]);
  }

  /**
   * Basic address location redirect
   * @param {String} url - External URL ou internal path string
   */
  redirect(url) {
    this.writeHead(301, { Location: url }).end();
  }

  /**
   * Send body response
   * @param {*} body
   */
  send(body) {

    if (this.finished) {
      return;
    }

    const contentTypeIsDefined = Boolean(this.getHeader("Content-Type"));

    if (body) {
      if (Buffer.isBuffer(body) || typeof body.pipe === "function") {
        if (!contentTypeIsDefined) {
          this.setHeader("Content-Type", "application/octet-stream");
        }
      } else if (typeof body === "object") {
        body = JSON.stringify(body);
        if (!contentTypeIsDefined) {
          this.setHeader("Content-Type", "application/json;charset=utf-8");
        }
      } else if (typeof body === "function") {
        body = body.toString();
        if (!contentTypeIsDefined) {
          this.setHeader("Content-Type", "Content-Type", "text/plain;charset=utf-8");
        }
      } else if (typeof body === "string") {
        if (!contentTypeIsDefined) {
          this.setHeader("Content-Type", "Content-Type", "text/plain;charset=utf-8");
        }
      } else {
        this.setHeader("Content-Type", "application/json;charset=utf-8");
        body = String(body);
      }

      this.setHeader("Content-Length", Buffer.byteLength(body));
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