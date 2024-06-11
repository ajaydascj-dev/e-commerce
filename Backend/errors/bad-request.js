import { constants } from "../constants.js";
import CustomAPIError from "./custom-api.js";
class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = constants.BADREQUEST;
    
  }
}

export default BadRequestError;
