import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  products: [],
  error: "",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProduct() {
      return { loading: true, products: [] };
    },
    fetchProductSuccess(state, action) {
      return { loading: false, products: action.payload.data };
    },
    fetchProductFail(state, action) {
      return { loading: false, products: [], error: action.payload.error };
    },
  },
});
//thunk
export const fetchProductData = () => {
  return async (dispatch) => {
    dispatch(productActions.fetchProduct());
    try {
      const response = await axios("http://localhost:4000/api/products");
      const { data } = response;

      dispatch(productActions.fetchProductSuccess({ data: data.data }));
    } catch (error) {
      dispatch(productActions.fetchProductFail({ error: error.message }));
    }
  };
};
export const productActions = productSlice.actions;
export default productSlice.reducer;
