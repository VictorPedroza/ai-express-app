import { Router } from "express";
import { askAi } from "../controllers/ai.controller.js";

export const aiRouter = Router();

aiRouter.post("/ask", askAi);
