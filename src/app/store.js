import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/userSlice";
import productReducer from "../features/productSlice";

export default configureStore({
  reducer: {
    user: cartReducer,
    products: productReducer
  }
});
