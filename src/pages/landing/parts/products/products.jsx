import React from "react";
import ProductCardComponent from "../../../../components/productCard/productCard";
import PP from "../../../../assests/pp.png";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import style from "./index.module.css";

export default function Productlanding({ title, data, category }) {
  const mapData = data.filter((ddd) =>
    ddd.category.toLowerCase().includes(category.toLowerCase())
  );
  const newData = mapData.length > 0 && (
    <div
      className={`${style.container} d-flex flex-column gap-3 align-items-start w-100`}
    >
      <div
        className={`${style.top} d-flex flex-row justify-content-between w-100 align-items-center px-2 `}
      >
        <div className={style.title}>{title}</div>
        <div className={`btn btn-primary`}>View All</div>
      </div>
      <ScrollingCarousel
        className={`d-flex flex-row gap-4 flex-wrap align-items-center`}
      >
        {data
          .filter((d) => d.category.toLowerCase().includes(category))
          .map((d, idx) => (
            <ProductCardComponent
              name={d.name.slice(0, 50)}
              image={d.image1}
              price={d.price}
              details={d}
              off={d.offer ? d.offer : null}
            />
          ))}
      </ScrollingCarousel>
    </div>
  );
  return <>{newData}</>;
}
