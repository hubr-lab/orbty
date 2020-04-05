/*!
* orbty
* Copyright(c) 2020 Gleisson Mattos
* http://github.com/gleissonmattos
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

const http = require("http");
const url = require("url");

/**
 * Incoming Message request class
 * @public
 */
class Request extends http.IncomingMessage {
  constructor () {
    super();
    this.initialTime = Date.now();
  }

  /**
   * Parse request url by url native module
   * @returns {UrlWithParsedQuery}
   */
  getUrlParse() {
    return url.parse(this.url, true);
  }

  /**
   * Return currenet request time based on initial request
   * @returns diff into current time and initial request time
   */
  getCurrentRequestTime() {
    return Date.now() - this.initialTime;
  }

  /**
   * Initial request time
   */
  get initialTime() {
    return this.initialTime;
  }

  /**
   * Get header user-agent
   * @returns {String} - user agent info
   */
  get agent() {
    return this.headers["user-agent"];
  }
}

module.exports = Request;