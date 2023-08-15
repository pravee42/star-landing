import React from "react";
import style from "./index.module.css";
import { useDispatch } from "react-redux";
import { Button } from "@nextui-org/react";
import { addtoCart } from "../../features/userSlice";

export default function ProductCardComponent({ name, off, price, image }) {
  const dispatch = useDispatch();

  return (
    <div className={style.card}>
      <div className={`${style.off} d-flex align-items-center`}>{off}%</div>
      <div className={style.upper}>
        <img src={image} alt={name} />
      </div>
      <div className={style.lower}>
        <div className={style.top}>
          <p className={style.productName}>{name}</p>
          <div className="d-flex flex-row gap-2">
            {["#746C6C", "#3B7BC6", "#C20BD2"].map((colorData) => {
              return (
                <div
                  key={colorData}
                  className={style.round}
                  style={{ backgroundColor: colorData }}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center justify-content-center">
          <p className={`${style.price}`}>Rs. {price}</p>
          <button
            onClick={() => {
              dispatch(addtoCart({ name, off, price }));
            }}
            className={`${style.addToCart}`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
