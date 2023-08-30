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
        className={`d-flex flex-column gap-4 align-items-center ${style.card}`}
        onClick={(_) => navigate(`/product/${details.id}`)}
      >
        <div className={`${style.cardImage} `}>
          <div className={`${style.tag} badge bg-dark text-white`}>
            {details.tag}
          </div>
          <img src={details.image1} at={details.name} />
        </div>
        <div className={`d-flex flex-column align-items-start ${style.bottom}`}>
          <p className={style.category}>{details.category}</p>
          <p className={style.title}>
            {details.product_title
              ? details.product_title.slice(0, 20)
              : details.name.length > 25
              ? `${details.name.slice(0, 20)}...`
              : details.name}
          </p>
          <div className={`d-flex flex-row gap-2`}>
            <p className={style.price}>₹ {details.price}</p>
            <p className={style.stikerate}>₹ {details.strike_rate}</p>
          </div>
        </div>
      </div>
    </>
  );
}
