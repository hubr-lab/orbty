const http = require("http");

class Response extends http.ServerResponse {
  constructor () {
    super();
  }

  status(statusCode) {
    this.statusCode = statusCode;
    return this;
  }

  json(body) {
    if (!this.getHeader('Content-Type')) {
      this.setHeader('Content-Type', 'application/json;charset=utf-8');
    }

    this.send(JSON.stringify(body));
  }

  plain(body) {
    if (!this.getHeader('Content-Type')) {
      this.setHeader("Content-Type", "text/plain");
    }

    if (typeof body !== "string") {
      body = JSON.stringify(body);
    }

    this.send(body);
  }

  sendStatus(code) {
    this.send(http.STATUS_CODES[code]);
  }

  send(body) {
    if (!this.getHeader('Content-Type')) {
      this.setHeader('Content-Type', 'application/json;charset=utf-8');
    }

    this.setHeader("Content-Length", Buffer.byteLength(body));

    this.end(body);
  }
}

module.exports = Response;