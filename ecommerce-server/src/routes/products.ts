import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  deleteProduct,
  getAdminProducts,
  getAllCategories,
  getAllProducts,
  getSingleProduct,
  getlatestProducts,
  newProduct,
  updateProduct,
} from "../controllers/product.js";
import { singleUpload } from "../middlewares/multer.js";

const app = express.Router();

// Create a new product - /api/products/new
app.post("/new", singleUpload, newProduct);

// To get last 10 Products - /api/products/latest
app.get("/all", getAllProducts);

// Get latest products - /api/products/latest
app.get("/latest", getlatestProducts);

// Get all categories - /api/products/categories
app.get("/categories", getAllCategories);

// Get all products - /api/products/admin-products
app.get("/admin-products", adminOnly, getAdminProducts);

app
  .route("/:id")
  .get(getSingleProduct)
  .put(adminOnly, singleUpload, updateProduct)
  .post(adminOnly, singleUpload, updateProduct)
  .delete(adminOnly, deleteProduct);

export default app;
