import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "@lukeed/uuid";

export const cartSlice = createSlice({
  name: "user",
  initialState: {
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    search: localStorage.getItem("search")
      ? localStorage.getItem("search")
      : "",
    ramFilter: "",
    storageFilter: "",
    rangeFilter: localStorage.getItem("rangeFilter")
      ? JSON.parse(localStorage.getItem("rangeFilter"))
      : { min: 0, max: 0 }
  },
  reducers: {
    addtoCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    changeQty: (state, action) => {
      const { productId, operation } = action.payload;
      const cartItemIndex = state.cart.findIndex(
        (item) => item.id === productId
      );

      if (cartItemIndex !== -1) {
        if (operation === "+") {
          state.cart[cartItemIndex].quantity += 1;
          state.cart[cartItemIndex].total =
            state.cart[cartItemIndex].quantity *
            state.cart[cartItemIndex].price;
        } else if (operation === "-") {
          if (state.cart[cartItemIndex].quantity > 1) {
            state.cart[cartItemIndex].quantity -= 1;
            state.cart[cartItemIndex].total =
              state.cart[cartItemIndex].quantity *
              state.cart[cartItemIndex].price;
          } else {
            state.cart.splice(cartItemIndex, 1); // Remove from cart if quantity becomes zero
          }
        }

        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    clearCart: (state, action) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      localStorage.setItem("search", state.search);
    },
    setRam: (state, action) => {
      state.ramFilter = action.payload;
    },
    setStorage: (state, action) => {
      state.storageFilter = action.payload;
    },
    setRange: (state, action) => {
      state.rangeFilter = action.payload;
      localStorage.setItem("rangeFilter", JSON.stringify(state.rangeFilter));
    }
  }
});

export const {
  addtoCart,
  changeQty,
  clearCart,
  setSearch,
  setRam,
  setStorage,
  setRange
} = cartSlice.actions;

export const selectCart = (state) => state.user.cart;
export const selectSearch = (state) => state.user.search;
export const selectRam = (state) => state.user.ramFilter;
export const selectRange = (state) => state.user.rangeFilter;
export const selectStorage = (state) => state.user.storageFilter;

export default cartSlice.reducer;
