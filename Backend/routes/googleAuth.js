import express from "express";
import { googleLoginAuth, googleLoginCallback } from "../controllers/googleAuth.js";
const router = express.Router();




router.route('/login/google').get(googleLoginAuth);
router.route('/auth/google/callback').get(googleLoginCallback);

export default router;