import React from "react";
import { ProductCategoriesData } from "../../../../config/data";
import { useNavigate } from "react-router-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import style from "./index.module.css";

export default function ProductCategories() {
  const navigate = useNavigate();
  return (
    <ScrollingCarousel>
      <div className={style.container}>
        {ProductCategoriesData.map((data, idx) => (
          <div
            onClick={() => navigate(`/category/${data.name}`)}
            key={idx}
            className={style.Card}
          >
            <img src={data.image} alt={data.name} />
          </div>
        ))}
      </div>
    </ScrollingCarousel>
  );
}
