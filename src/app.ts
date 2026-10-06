import express from "express";
import { errorHandler } from "./middleware/error-handler.js";
import { aiRouter } from "./routes/ai.routes.js";

export const app = express();

app.use(express.json());
app.get("/", (_req, res) => res.send("Hello World!"));
app.use("/ai", aiRouter);
app.use(errorHandler);
