import express from "express";

import {
  registerUser,
  loginUser,
  userLogout,
  listUsers,
  userById,
  updateUser,
  removeUser,
  updateRole,
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
  .route("/auth/update")
  .get(authenticate, authorizeAdmin, userById)
  .put(authenticate, updateUser);

router.route("/auth/update/:id").put(authenticate, authorizeAdmin, updateRole);
router
  .route("/auth/delete/:id")
  .delete(authenticate, authorizeAdmin, removeUser);
export default router;
