import React, { useState, useEffect } from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import BannerComponent from "../../components/banner/banner";
import { onValue, ref, set } from "firebase/database";
import style from "./index.module.css";
import ProductCategories from "./parts/category/category";
import { useDispatch } from "react-redux";
import apple from "../../assests/logos/apple.png";
import oppo from "../../assests/logos/oppo.png";
import oneplus from "../../assests/logos/oneplus.png";
import samsung from "../../assests/logos/samsung.png";
import mi from "../../assests/logos/mi.png";
import asus from "../../assests/logos/asus.png";
import sony from "../../assests/logos/sony.png";
import lenovo from "../../assests/logos/lenovo.png";
import vivo from "../../assests/logos/vivo.png";
import nokia from "../../assests/logos/nokia.png";
import noise from "../../assests/logos/noise.png";
import realme from "../../assests/logos/realme.png";
import Productlanding from "./parts/products/products";
import { Banner1 } from "../../config/api";
import { db } from "../../firebase";
import HeaderSliderComponent from "../../components/swiperHeader/swiperHeader";

const brands = [
  { name: "Apple", image: apple, path: "/brand/apple" },
  { name: "Oppo", image: oppo, path: "/brand/oppo" },
  { name: "OnePlus", image: oneplus, path: "/brand/oneplus" },
  { name: "Samsung", image: samsung, path: "/brand/samsung" },
  { name: "Mi", image: mi, path: "/brand/mi" },
  { name: "Asus", image: asus, path: "/brand/asus" },
  { name: "Sony", image: sony, path: "/brand/sony" },
  { name: "Lenovo", image: lenovo, path: "/brand/lenovo" },
  { name: "Vivo", image: vivo, path: "/brand/vivo" },
  { name: "Nokia", image: nokia, path: "/brand/nokia" },
  { name: "Noise", image: noise, path: "/brand/noise" },
  { name: "Realme", image: realme, path: "/brand/realme" }
];

export default function LandingPage() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState();
  const [slides, setSlides] = useState();

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
    onValue(ref(db, "swiper/"), (snapshot) => {
      try {
        const data = snapshot.val();
        if (data !== null) {
          setSlides(Object.values(data));
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
          {/*   <div className={style.title}> */}
          {/*     Your Gateway to <span>Cutting-Edge</span> Smartphones at Unbeatable */}
          {/*     Prices! */}
          {/*   </div> */}
          {/*   <div className={style.description}> */}
          {/*     Discover a world of cutting-edge smartphones from top brands at */}
          {/*     unbeatable prices. Whether you're a tech enthusiast, a busy */}
          {/*     professional, or just someone who loves staying connected, we have */}
          {/*     the perfect phone for you. */}
          {/*   </div> */}
          {/*   <div */}
          {/*     onClick={() => (window.location.href = "/products")} */}
          {/*     className={style.button} */}
          {/*   > */}
          {/*     Shop Now */}
          {/*   </div> */}
          {/* </div> */}
          {/* <div className={style.headerImage}> */}
          {/*   <img src={HeaderImage} alt="headerImage" /> */}
          {/* </div> */}
          {slides && <HeaderSliderComponent slides={slides} />}
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
      <ScrollingCarousel className="flex flex-row gap-4 bg-red-100 items-center w-full justify-evenly p-4 my-[20px]">
        {brands.map((brand, idx) => (
          <a
            className="mx-3 hover:sm:drop-shadow-lg"
            key={idx}
            href={brand.path}
          >
            <img
              style={{ cursor: "pointer" }}
              src={brand.image}
              alt={brand.name}
            />
          </a>
        ))}
      </ScrollingCarousel>
    </div>
  );
}
