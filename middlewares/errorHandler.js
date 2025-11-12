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

  if (error.name === "Unauthorized" || error.name === "JsonWebTokenError") {
    status = 401;
    message = "You are not authorized";
  }

  res.status(status).json({ message });
}

module.exports = errorHandler;
