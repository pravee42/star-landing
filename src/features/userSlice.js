import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "user",
  initialState: {
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  },
  reducers: {
    addtoCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify(state.cart));
      console.log(state.cart);
    }
  }
});

export const { addtoCart } = cartSlice.actions;

export const selectCart = (state) => state.user.cart;

export default cartSlice.reducer;
