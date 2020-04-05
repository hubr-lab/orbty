/**
 * Http exception
 * HTTP Exception error.
 * @constructor
 * @param {string} message - HTTP error message
 * @param {number} statusCode - HTTP code status
 */
class HttpException extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = this.constructor.name;
    this.code = Number(statusCode) || 500;
    this.message = message;
  }
}

module.exports = HttpException;