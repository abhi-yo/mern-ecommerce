import express from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRoute from "./routes/user.js";
import productRoute from "./routes/products.js";
const port = 4000;
connectDB();
const app = express();
app.use(express.json()); // middleware
app.get("/", (req, res) => {
    res.send("API working with /api/v1");
});
// using routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`Express is working on http://localhost:${port}`);
});
