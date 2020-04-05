/*!
* orbty
* Copyright(c) 2020 Gleisson Mattos
* http://github.com/gleissonmattos
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

const http = require("http");
const path = require("path");
const fs = require('fs');

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
    if (!this.getHeader('Content-Type')) {
      this.setHeader('Content-Type', 'application/json;charset=utf-8');
    }

    this.send(JSON.stringify(body));
  }

  /**
   * Send plain text content
   * @param {*} body
   */
  plain(body) {
    if (!this.getHeader('Content-Type')) {
      this.setHeader("Content-Type", "text/plain");
    }

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
    if (!this.getHeader('Content-Type')) {
      this.setHeader('Content-Type', 'application/json;charset=utf-8');
    }

    if (body) {
      this.setHeader("Content-Length", Buffer.byteLength(body));
    }

    this.end(body);
  }

  stream(filePath) {
    const file = fs.createReadStream(filePath);
    this.writeHead(200);

    file.pipe(this);
  }
}

module.exports = Response;