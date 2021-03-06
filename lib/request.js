/* !
* orbty
* Copyright(c) 2020 Gleisson Mattos
* http://github.com/gleissonmattos
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

const http = require("http");
const parser = require('parseurl');
const qs = require('qs');

/**
 * Incoming Message request class
 * @public
 */
class Request extends http.IncomingMessage {

  constructor() {
    super();
    this.context = null;
  }

  /**
   * Parse request url by url native module
   * @returns {UrlWithParsedQuery}
   */
  getUrlParse() {
    const url = parser(this);
    url.query = qs.parse(url.query);

    return url;
  }

  /**
   * Return currenet request time based on initial request
   * @deprecated use .latency() instead of .getCurrentRequestTime
   * @returns diff into current time and initial request time
   */
  getCurrentRequestTime() {
    console.warn("'getCurrentRequestTime' is deprecated and will be removed in a future version");
    return this.latency();
  }

  /**
  * Get current request latency
  * @returns diff into current time and initial request time
  */
  latency() {
    return Date.now() - this.time;
  }

  /**
   * Initial request time
   */
  get initialTime() {
    return this.time;
  }

  /**
   * Get header by name
   * @param {string} headerName
   */
  header(headerName) {

    if (typeof headerName !== "string") {
      throw new Error("Header name is not a string");
    }

    return this.headers[headerName];
  }

  /**
   * Get header host
   */
  get host() {
    return this.header("host");
  }

  /**
   * Get request header language
   */
  get language() {
    return this.header("language");
  }

  /**
   * Get request header accept
   */
  get accept() {
    return this.header("accept");
  }

  /**
   * Get header user-agent
   * @returns {String} - user agent info
   */
  get agent() {
    return this.header("user-agent");
  }
}

module.exports = Request;
