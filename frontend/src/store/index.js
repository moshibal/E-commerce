import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./prodouctSlice.js";
import productDetailReducer from "./productDetailSlice.js";
const store = configureStore({
  reducer: { product: productReducer, productDetail: productDetailReducer },
});
export default store;
