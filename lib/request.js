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