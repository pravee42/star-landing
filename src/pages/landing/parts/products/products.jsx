import React from "react";
import ProductCardComponent from "../../../../components/productCard/productCard";
import PP from "../../../../assests/pp.png";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import style from "./index.module.css";

export default function Productlanding({ title, data, category, sub, slate, brand, newD }) {
  const mapData = category ? data.filter(
    (ddd) =>
      ddd.category.toLowerCase().includes(category.toLowerCase()) ||
      ddd.sub_category.toLowerCase().includes(category.toLowerCase()) ||
      ddd.brand.toLowerCase().includes(category.toLowerCase())
  ): newD ?  data.filter((ddd) => ddd.tag.toLowerCase().includes("new") || ddd.tag.toLowerCase().includes("sale")) : []

  const newData = mapData.length > 0 && (
    <div className={`p-4 border-y-2 ${slate ? 'bg-slate-50' : ''}`}>
      <div
        className={`${style.container} d-flex flex-column gap-3 align-items-start w-100`}
      >
        <div
          className={`${style.top} d-flex flex-row justify-content-between w-100 align-items-center px-2 `}
        >
          <div className={style.title}>{title}</div>
          <div
            onClick={() => {
              window.location.href = !sub && !brand
                ? `/category/${category}`
                : brand
                ? `/brand/${category}`
                : `/categories/sub/${category}`;
            }}
            className={`btn btn-primary`}
          >
            View All
          </div>
        </div>
        <ScrollingCarousel className={`flex gap-4 flex-wrap items-center`}>
          {mapData.map((d, idx) => (
            <ProductCardComponent
              slate={slate}
              name={d.name.slice(0, 50)}
              key={idx}
              image={d.image1}
              price={d.price}
              details={d}
              off={d.offer ? d.offer : null}
            />
          ))}
        </ScrollingCarousel>
      </div>
    </div>
  );
  return <>{newData}</>;
}
