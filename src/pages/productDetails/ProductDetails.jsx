import React from "react";
import { useParams } from "react-router-dom";
import style from "./index.module.css";

const ProductDetails = () => {
  const { id } = useParams();
  return <div className={`${style.container}`}></div>;
};

export default ProductDetails;
