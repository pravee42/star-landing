import React from "react";
import HeaderImage from "../../assests/headerImg.png";
import BannerComponent from "../../components/banner/banner";
import { BannerImag1, BannerImg2, BannerImg3 } from "../../utils/constants";
import style from "./index.module.css";
import ProductCategories from "./parts/category/category";
import Productlanding from "./parts/products/products";

export default function LandingPage() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.headerContent}>
          <div className={style.title}>
            Your Gateway to <span>Cutting-Edge</span> Smartphones at Unbeatable
            Prices!
          </div>
          <div className={style.description}>
            Discover a world of cutting-edge smartphones from top brands at
            unbeatable prices. Whether you're a tech enthusiast, a busy
            professional, or just someone who loves staying connected, we have
            the perfect phone for you.
          </div>
          <div className={style.button}>Shop Now</div>
        </div>
        <div className={style.headerImage}>
          <img src={HeaderImage} alt="headerImage" />
        </div>
      </div>
      <div>
        <ProductCategories />
      </div>
      <div>
        <Productlanding title={"Mobile Phones"} />
      </div>
      <div>
        <BannerComponent image={BannerImag1} title={"Welcome"} />
      </div>
      <div>
        <Productlanding title={"Trending"} />
      </div>
      <div>
        <BannerComponent image={BannerImg2} title={"Welcome"} />
      </div>
      <div>
        <Productlanding title={"Accssories"} />
      </div>
      <div>
        <BannerComponent image={BannerImg3} title={"Welcome"} />
      </div>
    </div>
  );
}
