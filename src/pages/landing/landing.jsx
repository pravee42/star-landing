import React, { useState, useEffect } from "react";
import HeaderImage from "../../assests/headerImg.png";
import BannerComponent from "../../components/banner/banner";
import { onValue, ref, set } from "firebase/database";
import style from "./index.module.css";
import ProductCategories from "./parts/category/category";
import { setProductsData } from "../../features/productSlice";
import { useDispatch } from "react-redux";
import Productlanding from "./parts/products/products";
import { Banner1 } from "../../config/api";
import { db } from "../../firebase";
import { Content } from "./parts/Content/Content";
export default function LandingPage() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState();

  const [banner, setBanner] = useState({
    img1: null,
    img2: null,
    img3: null
  });

  useEffect(() => {
    onValue(ref(db, "product/"), (snapshot) => {
      try {
        const data = snapshot.val();
        if (data !== null) {
          setProducts(Object.values(data));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    });
  }, [4]);

  useEffect(() => {
    async function getData() {
      const banners = await Banner1();
      await setBanner({
        img1: banners[1]?.image,
        img2: banners[0]?.image,
        img3: banners[2]?.image
      });
    }
    getData();
  }, [banner]);

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
          <div
            onClick={() => (window.location.href = "/products")}
            className={style.button}
          >
            Shop Now
          </div>
        </div>
        <div className={style.headerImage}>
          <img src={HeaderImage} alt="headerImage" />
        </div>
      </div>
      <div>
        <ProductCategories />
      </div>
      <Productlanding
        data={products ? products : []}
        category={"phone"}
        slate={true}
        title={"Mobile Phones"}
      />
      <div className="mt-3">
        <Productlanding
          data={products ? products : []}
          category={"earpods"}
          sub={true}
          slate={true}
          title={"Ear Pods"}
        />
      </div>
      <div>
        <BannerComponent image={banner.img1} title={"Welcome"} />
      </div>
      <div className="mt-3">
        <Productlanding
          data={products ? products : []}
          category={"apple"}
          title={"Apple Products"}
          brand={true}
          slate={false}
        />
      </div>
     <div className="mt-3">
        <Productlanding
          data={products ? products : []}
          title={"New Launch Products"}
          newD={true}
        />
      </div>
      <div>
        <BannerComponent image={banner.img3} title={"Welcome"} />
      </div>
    </div>
  );
}
