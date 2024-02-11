import express from "express";

import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

app.post("/new");

export default app;
