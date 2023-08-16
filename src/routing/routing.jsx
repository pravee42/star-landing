import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing/landing";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Cart from "../pages/cart/Cart";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/product" element={<ProductDetails />}></Route>
      <Route path="/profile" element={<LandingPage />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
};

export default Routing;
