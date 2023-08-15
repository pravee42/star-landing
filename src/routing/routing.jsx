import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing/landing";
import ProductDetails from "../pages/productDetails/ProductDetails";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/product/:id" element={<ProductDetails />}></Route>
      <Route path="/profile" element={<LandingPage />}></Route>
    </Routes>
  );
};

export default Routing;
