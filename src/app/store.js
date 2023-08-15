import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    user: cartReducer
  }
});
