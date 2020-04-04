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

class Request extends http.IncomingMessage {
  constructor () {
    super();
  }

  getUrlParse() {
    return url.parse(this.url, true);
  }

  get agent() {
    return this.headers["user-agent"];
  }
}

module.exports = Request;