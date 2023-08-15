import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "user",
  initialState: {
    cart: []
  },
  reducers: {
    addtoCart: (state, action) => {
      console.log(action);
    }
  }
});

export const { addtoCart } = cartSlice.actions;

export const selectCart = (state) => state.user.user;

export default cartSlice.reducer;
