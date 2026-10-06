import type { RequestHandler } from "express";
import { askOllama } from "../services/ollama.service.js";

export const askAi: RequestHandler = async (req, res, next) => {
  const { message } = req.body;

  if (typeof message !== "string" || message.trim().length === 0) {
    res.status(400).json({ error: "A non-empty message is required." });
    return;
  }

  try {
    const data = await askOllama(message);
    res.json({ data });
  } catch (error) {
    next(error);
  }
};
