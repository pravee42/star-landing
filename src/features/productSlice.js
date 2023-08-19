import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    productsData: []
  },
  reducers: {
    setProductsData: (state, action) => {
      state.productsData = action.payload;
      console.log(productsData);
    }
  }
});

export const { setProductsData } = productSlice.actions;

export const selectProduct = (state) => state.products.productsData;

export default productSlice.reducer;
