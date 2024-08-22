const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require("../utils/common");

const validateCreateRequest = (req, res, next) => {
  if (!req.body.flightNumber) {
    ErrorResponse.message = "something went wrong while creating flight";
    ErrorResponse.error = {
      explanation:
        "flightNumber is not found in the incoming request in the correct form",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.airplaneId) {
    ErrorResponse.message = "something went wrong while creating flight";
    ErrorResponse.error = {
      explanation:
        "airplanId is not found in the incoming request in the correct form",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.departureAirportId) {
    ErrorResponse.message = "something went wrong while creating flight";
    ErrorResponse.error = {
      explanation:
        "departureAirportId is not found in the incoming request in the correct form",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = "something went wrong while creating flight";
    ErrorResponse.error = {
      explanation:
        "arrivalAirportId is not found in the incoming request in the correct form",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.arrivalTime) {
    ErrorResponse.message = "something went wrong while creating flight";
    ErrorResponse.error = {
      explanation:
        "arrivalTime is not found in the incoming request in the correct form",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.departureTime) {
    ErrorResponse.message = "something went wrong while creating flight";
    ErrorResponse.error = {
      explanation:
        "departureTime is not found in the incoming request in the correct form",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.price) {
    ErrorResponse.message = "something went wrong while creating flight";
    ErrorResponse.error = {
      explanation:
        "price is not found in the incoming request in the correct form",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.totalSeats) {
    ErrorResponse.message = "something went wrong while creating flight";
    ErrorResponse.error = {
      explanation:
        "totalSeats is not found in the incoming request in the correct form",
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
};

module.exports = {
  validateCreateRequest,
};
