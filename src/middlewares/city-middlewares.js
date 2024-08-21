const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require("../utils/common");

const validateCreateRequest = (req, res, next) => {
  if (!req.body.name) {
    ErrorResponse.message = "something went wrong while creating city";
    ErrorResponse.error = {
      explanation: "Name is not found in the incoming request",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
};

module.exports = {
  validateCreateRequest,
};
