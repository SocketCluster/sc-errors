function AuthTokenExpiredError(message) {
  Error.captureStackTrace(this, arguments.callee);

  this.name = 'AuthTokenExpiredError';
  this.message = message;
};

AuthTokenExpiredError.prototype = Object.create(Error.prototype);

module.exports = {
  AuthTokenExpiredError: AuthTokenExpiredError
};
