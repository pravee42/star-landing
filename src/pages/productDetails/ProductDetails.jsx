import React from "react";
import { useParams } from "react-router-dom";
import style from "./index.module.css";
import phone from "../../assests/phone.png";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className={`${style.container}`}>
      <div className={`${style.productContainer}`}>
        <div className={`${style.imageContainer}`}>
          <img src={phone} className={`${style.image}`} alt="product" />
          <div className={`${style.RecommendedimageContainer}`}>
            <div className={`${style.RecommendedimmageCard}`}>
              {" "}
              <img
                src={phone}
                className={`${style.Recommendedimage}`}
                alt="product"
              />
            </div>
            <div className={`${style.RecommendedimmageCard}`}>
              {" "}
              <img
                src={phone}
                className={`${style.Recommendedimage}`}
                alt="product"
              />
            </div>
            <div className={`${style.RecommendedimmageCard}`}>
              {" "}
              <img
                src={phone}
                className={`${style.Recommendedimage}`}
                alt="product"
              />
            </div>
          </div>
        </div>
        <div>
          <h1>Iphone 14 pro max</h1>
          <p className={`${style.TextContainer}`}>
            The iPhone 14 Pro Max measures 160.70 x 77.60 x 7.85mm (height x
            width x thickness) and weighs 240.00 grams. It was launched in Space
            Black, Silver, Gold, and Deep Purple colours. It features an IP68
            rating for dust and water protection. Connectivity options on the
            iPhone 14 Pro Max include Wi-Fi and Lightning.
          </p>

          <div className={`${style.ButtonContainer}`}>
            <button className={`${style.ButtonC}`}>Add to cart</button>
            <button className={`${style.ButtonB}`}>Buy now</button>
          </div>
        </div>
      </div>

      <div className={`${style.Recommended}`}>
        <h1>Recommended products</h1>
      </div>
    </div>
  );
};

export default ProductDetails;

