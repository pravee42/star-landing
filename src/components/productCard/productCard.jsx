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
          </div>
          <div className="d-flex justify-content-between align-items-center justify-content-center" style={{marginBottom: 10}}>
            <p className={`${style.price} text-success`}>Rs. {price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
