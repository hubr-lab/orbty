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
  }

  /**
   * Parse request url by url native module
   * @returns {UrlWithParsedQuery}
   */
  getUrlParse() {
    return url.parse(this.url, true);
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