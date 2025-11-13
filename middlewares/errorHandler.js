function errorHandler(error, req, res, next) {
  let status = 500;
  let message = "Internal Server Error";

  if (
    error.name === "SequelizeValidationError" ||
    error.name === "SequelizeUniqueConstraintError"
  ) {
    status = 400;
    message = error.errors[0].message;
  }

  if (error.name === "FormError") {
    status = 400;
    message = "Email and Password are required";
  }
  if (error.name === "LoginError") {
    status = 400;
    message = "Invalid email or password";
  }

  if (error.name === "LoginGoogleError") {
    status = 400;
    message = "Cannot Login With Google";
  }

  if (error.name === "CreateError") {
    status = 400;
    message = "City or Country Required";
  }

  if (error.name === "Unauthorized" || error.name === "JsonWebTokenError") {
    status = 401;
    message = "You are not authorized";
  }

  if (error.name === "Forbidden") {
    status = 403;
    message = "You do not have access to this resource";
  }

  if (error.name === "InvalidCity") {
    status = 404;
    message = "City not found";
  }

  if (error.name === "InvalidCountry") {
    status = 404;
    message = "Country not Found";
  }

  if (error.name === "NotFound") {
    status = 404;
    message = "Resource not found";
  }

  res.status(status).json({ message });
}

module.exports = errorHandler;
