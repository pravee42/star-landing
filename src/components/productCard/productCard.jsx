import React from "react";
import style from "./index.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { addtoCart } from "../../features/userSlice";

export default function ProductCardComponent({
  name,
  off,
  price,
  image,
  details
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={(_) => navigate(`/product/${details.id}`)}
        className={style.card}
      >
        {off && (
          <div className={`${style.off} d-flex align-items-center`}>{off}%</div>
        )}
        <div className={style.upper}>
          <img src={image} alt={name} />
        </div>
        <div className={style.lower}>
          <div className={style.top}>
            <p style={{ textAlign: "left" }} className={`h6 text-dark`}>
              {name}
            </p>
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
            {/* <button
              onClick={() => {
                dispatch(
                  addtoCart({
                    id: details.id,
                    name: details.name,
                    price: details.price,
                    quantity: 1,
                    total: price,
                    image: details.image1
                  })
                );
              }}
              className={`${style.addToCart}`}
            >
              Add to Cart
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
