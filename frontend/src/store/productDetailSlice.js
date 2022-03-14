import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  product: { reviews: [] },
  error: "",
};
const productDetailSlice = createSlice({
  name: "product details",
  initialState,
  reducers: {
    fetchProductDetail() {
      return { loading: true, product: {} };
    },
    fetchProductDetailSuccess(state, action) {
      return {
        loading: false,
        product: action.payload.data,
      };
    },
    fetchProductDetailFail(state, action) {
      return { loading: false, products: [], error: action.payload.error };
    },
  },
});
//thunk
export const fetchProductDetailData = (id) => {
  return async (dispatch) => {
    dispatch(productDetailAction.fetchProductDetail());
    try {
      const response = await axios(`http://localhost:4000/api/products/${id}`);
      const { data } = response;
      console.log(data.data);
      console.log("before dispatch");
      dispatch(
        productDetailAction.fetchProductDetailSuccess({ data: data.data })
      );
      console.log("after dispatch");
    } catch (error) {
      dispatch(
        productDetailAction.fetchProductDetailFail({ error: error.message })
      );
    }
  };
};
export const productDetailAction = productDetailSlice.actions;
export default productDetailSlice.reducer;
