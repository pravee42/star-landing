import React, { useState, useEffect } from "react";
import { onValue, ref, set } from "firebase/database";
import { useParams } from "react-router-dom";
import style from "./index.module.css";
import { selectSearch } from "../../features/userSlice";
import AccordionGroup from "@mui/joy/AccordionGroup";
import { useSelector } from "react-redux";
import Link from "@mui/joy/Link";
import { NoData } from "../../config/data";
import Input from "@mui/joy/Input";
import { Phones, Accessories, Brands } from "./productsConfig.js";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { db } from "../../firebase";
import ProductCardComponent from "../../components/productCard/productCard";

export default function Products() {
  const [products, setProducts] = useState();
  const { name, brand, category, sub, bb } = useParams();
  const pathName = window.location.pathname;
  const search = useSelector(selectSearch);
  const [searchSubcatProduct, setSearchSubcatProduct] = useState("");
  const [searchSubcatAccessories, setSearchSubcatAccessories] = useState("");
  const [brandSearch, setBrandSearch] = useState("");

  useEffect(() => {
    onValue(ref(db, "product/"), (snapshot) => {
      try {
        const data = snapshot.val();
        if (data !== null) {
          setProducts(Object.values(data));
          console.log(products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    });
  }, [4]);

  return (
    <div className="d-flex flex-row p-4">
      <div
        className="d-flex flex-column p-4 bordered rounded gap-2 shadow"
        style={{
          width: 400,
          marginRight: 20,
          maxHeight: 500,
          height: "fit-content",
          overflowY: "auto"
        }}
      >
        <p className="h5 text-dark">Filter By,</p>
        <AccordionGroup size="sm" sx={{ maxWidth: 400 }}>
          <Accordion>
            <AccordionSummary>
              {name === "phone"
                ? "Search by Brands"
                : brand
                ? "Search by brand"
                : "Mobile Phones"}
            </AccordionSummary>
            <AccordionDetails>
              <div className={style.sidebar_phones}>
                <Input
                  onChange={(e) => setSearchSubcatProduct(e.target.value)}
                  type="search"
                  className="form-control"
                  placeholder="Search by Brand"
                />
                {Phones.filter((data) =>
                  data.name
                    .toLowerCase()
                    .includes(searchSubcatProduct.toLowerCase())
                ).map((data) => (
                  <Link href={data.path}>{data.name}</Link>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
          {category === "phone" ||
          category === "laptop" ||
          category === "accessories" ? (
            <>
              <Accordion>
                <AccordionSummary>Ram</AccordionSummary>
                <AccordionDetails>
                  <Link>4 GB</Link>
                  <Link>8 GB</Link>
                  <Link>12 GB</Link>
                  <Link>16 GB</Link>
                  <Link>32 GB</Link>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary>Storage</AccordionSummary>
                <AccordionDetails>
                  <Link>4 GB</Link>
                  <Link>8 GB</Link>
                  <Link>12 GB</Link>
                  <Link>16 GB</Link>
                  <Link>32 GB</Link>
                  <Link>64 GB</Link>
                  <Link>128 GB</Link>
                  <Link>326 GB</Link>
                </AccordionDetails>
              </Accordion>
            </>
          ) : null}
          <Accordion>
            <AccordionSummary>Accessories</AccordionSummary>
            <AccordionDetails>
              <div className={style.sidebar_phones}>
                <Input
                  onChange={(e) => setSearchSubcatAccessories(e.target.value)}
                  type="search"
                  className="form-control"
                  placeholder="Search by type"
                />
                {Accessories.filter((data) =>
                  data.name
                    .toLowerCase()
                    .includes(searchSubcatAccessories.toLowerCase())
                ).map((data) => (
                  <Link href={data.path}>{data.name}</Link>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary>Brand</AccordionSummary>
            <AccordionDetails>
              <div className={style.sidebar_phones}>
                <Input
                  onChange={(e) => setBrandSearch(e.target.value)}
                  type="search"
                  className="form-control"
                  placeholder="Search by type"
                />
                {Brands.filter((data) =>
                  data.name.toLowerCase().includes(brandSearch.toLowerCase())
                ).map((data) => (
                  <Link href={data.path}>{data.name}</Link>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </div>
      <div className="d-flex flex-column gap-2 shadow w-100">
        <div
          style={{ maxHeight: "70vh", overflowY: "auto" }}
          className="d-flex p-4 gap-2 align-items-start justify-content-start flex-wrap rounded shadow-sm overflow-auto w-100"
        >
          {!name && !brand && !sub && !bb
            ? products
                ?.filter((data) => data.name.toLowerCase().includes(search))
                ?.map((data) => (
                  <ProductCardComponent
                    name={data.name.slice(0, 50)}
                    offer={data.offer}
                    details={data}
                    image={data.image1}
                    price={data.price}
                  />
                ))
            : null}
          {name
            ? products
                ?.filter((data) => data.category.toLowerCase().includes(name))
                ?.filter((data) => data.name.toLowerCase().includes(search))
                .map((data) => (
                  <ProductCardComponent
                    name={data.name.slice(0, 50)}
                    offer={data.offer}
                    details={data}
                    image={data.image1}
                    price={data.price}
                  />
                ))
            : null}
          {brand
            ? products
                ?.filter((data) => data.brand.toLowerCase().includes(brand))
                ?.filter((data) => data.name.toLowerCase().includes(search))
                .map((data) => (
                  <ProductCardComponent
                    name={data.name.slice(0, 50)}
                    offer={data.offer}
                    details={data}
                    image={data.image1}
                    price={data.price}
                  />
                ))
            : null}
          {sub
            ? products
                ?.filter((data) =>
                  data.sub_category.toLowerCase().includes(sub)
                )
                ?.filter((data) => data.name.toLowerCase().includes(search))

                .map((data) => (
                  <ProductCardComponent
                    name={data.name.slice(0, 50)}
                    offer={data.offer}
                    details={data}
                    image={data.image1}
                    price={data.price}
                  />
                ))
            : null}
          {bb
            ? products
                ?.filter((data) => data.brand.toLowerCase().includes(bb))
                ?.filter((data) => data.name.toLowerCase().includes(search))
                .map((data) => (
                  <ProductCardComponent
                    name={data.name.slice(0, 50)}
                    offer={data.offer}
                    details={data}
                    image={data.image1}
                    price={data.price}
                  />
                ))
            : null}
        </div>
      </div>
    </div>
  );
}
