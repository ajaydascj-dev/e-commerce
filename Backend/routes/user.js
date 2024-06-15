import express from "express";

import {
  registerUser,
  loginUser,
  userLogout,
  listUsers,
  userById,
  updateUser,
  removeUser,
} from "../controllers/user.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
const router = express.Router();

router
  .route("/")
  .post(registerUser)
  .get(authenticate, authorizeAdmin, listUsers);
router.route("/auth/login").post(loginUser);
router.route("/auth/logout").post(userLogout);
router
  .route("/:id")
  .get(authenticate, userById)
  .put(authenticate, updateUser)
  .delete(authenticate, authorizeAdmin, removeUser);

export default router;
