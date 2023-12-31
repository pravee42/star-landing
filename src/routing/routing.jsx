import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing/landing";
import ProductDetails from "../pages/productDetails/ProductDetails";
import Checkout from "../pages/checkOutPage/Checkout";
import Services from "../pages/services/Services";
import Products from "../pages/products/products";
import LoginComponent from "../pages/login/login";

const Routing = () => {
  return (
    <Routes>
      <Route path="/product/:id" element={<ProductDetails />}></Route>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/category/:name" element={<Products />}></Route>
      <Route path="/categories/sub/:sub" element={<Products />}></Route>
      <Route path="/brand/:bb" element={<Products />}></Route>
      <Route
        path="/categories/:category/brand/:brand"
        element={<Products />}
      ></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/login" element={<LoginComponent />}></Route>
    </Routes>
  );
};

export default Routing;
