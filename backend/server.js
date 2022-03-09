import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import products from "./assets/products.js";
const app = express();
app.use(cors());
app.get("/products", (req, res) => {
  res.json(products);
});
app.get("/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});
const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log("the app running on port 4000"));
