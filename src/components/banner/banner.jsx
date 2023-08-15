import React from "react";
import style from "./index.module.css";

const BannerComponent = ({ image, link, title, url }) => {
  return (
    <div className={style.container}>
      <img src={image} alt={title} />
    </div>
  );
};

export default BannerComponent;
