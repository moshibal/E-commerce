import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import products from "./assets/products.js";
import mongoose from "mongoose";
//connecting to the database
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGOCONSTRING);
  console.log("Database connection successful");
}
const app = express();
app.use(cors());
//importing routes
import productRoute from "./routes/productRoutes.js";
app.use("/api/products", productRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log("the app running on port 4000"));
