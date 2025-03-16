import express, { Router } from "express";
import { getUser } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const router = Router();

router.get("/", getUser);

export default router;
