import express from "express";
import productModel from "../models/productModel.js";
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const product = await productModel.findById({ _id });
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});
export default router;
