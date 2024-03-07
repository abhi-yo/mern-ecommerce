import express from "express";

import { adminOnly } from "../middlewares/auth.js";
import {
  getBarChart,
  getDashboardStats,
  getLineChart,
  getPieChart,
} from "../controllers/stats.js";

const app = express.Router();

app.get("/stats", getDashboardStats);
app.get("/pie", getPieChart);
app.get("/bar", getBarChart);
app.get("/line", getLineChart);

export default app;
