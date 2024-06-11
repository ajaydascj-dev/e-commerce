import { constants } from "../constants.js";
import CustomAPIError from "./custom-api.js";

class UnauthorizedError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = constants.UNAUTHORIZED;
    }
}

export default UnauthorizedError;