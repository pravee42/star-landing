import React from "react";
import { ProductCategoriesData } from "../../../../config/data";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import style from "./index.module.css";

export default function ProductCategories() {
  return (
    <ScrollingCarousel>
    <div className={style.container}>
      {ProductCategoriesData.map((data, idx) => (
        <div key={idx} className={style.Card}>
          <img src={data.image} alt={data.name} />
        </div>
      ))}
    </div>
    </ScrollingCarousel>
  );
}
