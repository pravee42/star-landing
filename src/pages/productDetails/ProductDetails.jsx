import React from "react";
import { useParams } from "react-router-dom";
import style from "./index.module.css";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className={`d-flex flex-column gap-4 h-100 w-100`}>
      <div
        className={`d-flex flex-row gap-4 w-100 align-items-center flex-wrap`}
      >
        <div></div>
        <div className={`d-flex flex-column p-2 gap-2 w-100 ${style.right}`}>
          <p className={`h3 d-flex w-100 `}>Iphone 14 pro max</p>
          <p className={`h6 d-flex w-100`}>
            The iPhone 14 Pro Max measures 160.70 x 77.60 x 7.85mm (height x
            width x thickness) and weighs 240.00 grams. It was launched in Space
            Black, Silver, Gold, and Deep Purple colours. It features an IP68
            rating for dust and water protection. Connectivity options on the
            iPhone 14 Pro Max include Wi-Fi and Lightning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
