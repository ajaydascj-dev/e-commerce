import { constants } from "../constants.js";

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  switch (statusCode) {
    case constants.BADREQUEST:
      res.status(constants.BADREQUEST).json({
        title: "Bad Request",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHORIZED:
      res.status(constants.UNAUTHORIZED).json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.PAYMENTREQUIRED:
      res.status(constants.PAYMENTREQUIRED).json({
        title: "Payment Required",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.status(constants.FORBIDDEN).json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOTFOUND:
      res.status(constants.NOTFOUND).json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.SERVERERROR:
      res.status(constants.SERVERERROR).json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      res.status(500).json({
        title: "Something Went Wrong",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
  }
};
export { errorHandler };
