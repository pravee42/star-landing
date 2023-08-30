import React, { useState, useEffect } from "react";
import { onValue, ref, set } from "firebase/database";
import { useParams } from "react-router-dom";
import style from "./index.module.css";
import {
  selectSearch,
  selectRam,
  selectStorage,
  selectRange,
  setRange,
  setSearch
} from "../../features/userSlice";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import AccordionGroup from "@mui/joy/AccordionGroup";
import { useSelector, useDispatch } from "react-redux";
import Link from "@mui/joy/Link";
import { NoData } from "../../config/data";
import Input from "@mui/joy/Input";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Phones, Accessories, Brands } from "./productsConfig.js";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { db } from "../../firebase";
import ProductCardComponent from "../../components/productCard/productCard";

export default function Products() {
  const [products, setProducts] = useState();
  const [showSideBar, setShowSidebar] = useState(true);
  const { name, brand, category, sub, bb } = useParams();
  const pathName = window.location.pathname;
  const search = useSelector(selectSearch);
  const ramFilter = useSelector(selectRam);
  const storageFilter = useSelector(selectStorage);
  const rangeFilter = useSelector(selectRange);
  const [searchSubcatProduct, setSearchSubcatProduct] = useState("");
  const [searchSubcatAccessories, setSearchSubcatAccessories] = useState("");
  const [brandSearch, setBrandSearch] = useState("");
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

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

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <div className={`d-flex flex-column p-4 bordered rounded gap-2 shadow`}>
      <p className="h5 text-dark">Filter By,</p>
      <div className="d-flex flex-column gap-2 mt-3 align-items-start">
        <p className="h6 text-dark">Price Range Filter</p>
        <div className="d-flex flex-row gap-3">
          <div className={style.min_input}>
            ₹
            <input
              type="text"
              placeholder="Min value"
              defaultValue={rangeFilter.min}
              onChange={(e) =>
                dispatch(
                  setRange({ min: e.target.value, max: rangeFilter.max })
                )
              }
            />
          </div>
          <div className={style.min_input}>
            ₹
            <input
              type="text"
              placeholder="Max value"
              defaultValue={rangeFilter.max}
              onChange={(e) =>
                dispatch(
                  setRange({ min: rangeFilter.min, max: e.target.value })
                )
              }
            />
          </div>
        </div>
      </div>
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
  );

  const filteredProducts = products?.filter((data) => {
    if (rangeFilter.min || rangeFilter.max) {
      if (rangeFilter.min) {
        return parseInt(data.price) >= parseInt(rangeFilter.min);
      } else if (rangeFilter.max) {
        return parseInt(data.price) <= parseInt(rangeFilter.max);
      } else {
        return (
          parseInt(data.price) >= parseInt(rangeFilter.min) &&
          parseInt(data.price) <= parseInt(rangeFilter.max)
        );
      }
    } else {
      return data;
    }
  });

  return (
    <div>
      <div className={style.mobileMenu}>
        <IconButton color="inherit" onClick={toggleDrawer}>
          <FilterAltIcon />
        </IconButton>
      </div>
      <div className={`d-flex flex-row p-4 ${style.container}`}>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <div role="presentation" style={{ width: 300 }}>
            {drawerContent}
          </div>
        </Drawer>
        {showSideBar ? (
          <div
            className={`d-flex flex-column p-4 bordered rounded gap-2 shadow ${style.sideBarFilter}`}
          >
            <p className="h5 text-dark">Filter By,</p>
            <div className="d-flex flex-column gap-2 mt-3 align-items-start">
              <p className="h6 text-dark">Price Range Filter</p>
              <div className="d-flex flex-row gap-3">
                <div className={style.min_input}>
                  ₹
                  <input
                    type="text"
                    placeholder="Min value"
                    defaultValue={rangeFilter.min}
                    onChange={(e) =>
                      dispatch(
                        setRange({ min: e.target.value, max: rangeFilter.max })
                      )
                    }
                  />
                </div>
                <div className={style.min_input}>
                  ₹
                  <input
                    type="text"
                    placeholder="Max value"
                    defaultValue={rangeFilter.max}
                    onChange={(e) =>
                      dispatch(
                        setRange({ min: rangeFilter.min, max: e.target.value })
                      )
                    }
                  />
                </div>
              </div>
            </div>
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
              <Accordion>
                <AccordionSummary>Accessories</AccordionSummary>
                <AccordionDetails>
                  <div className={style.sidebar_phones}>
                    <Input
                      onChange={(e) =>
                        setSearchSubcatAccessories(e.target.value)
                      }
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
                      data.name
                        .toLowerCase()
                        .includes(brandSearch.toLowerCase())
                    ).map((data) => (
                      <Link href={data.path}>{data.name}</Link>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            </AccordionGroup>
          </div>
        ) : null}
        <div className="d-flex flex-column gap-2 shadow w-100">
          <div className="p-2">
            <label class="relative block">
              <span class="sr-only">Search</span>

              <input
                onChange={(e) => dispatch(setSearch(e.target.value))}
                type="search"
                class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search for anything..."
                type="text"
                name="search"
              />
            </label>
          </div>
          <div
            style={{ maxHeight: "70vh", overflowY: "auto" }}
            className={`d-flex p-4 gap-2 align-items-start justify-content-start flex-wrap rounded shadow-sm overflow-auto w-100 ${style.productsContainer}`}
          >
            {!name && !brand && !sub && !bb
              ? filteredProducts
                  ?.filter((data) => data.name.toLowerCase().includes(search))
                  ?.map((data) => (
                    <ProductCardComponent
                      name={data.name.slice(0, 50)}
                      offer={data.offer}
                      key={data.id}
                      details={data}
                      image={data.image1}
                      price={data.price}
                    />
                  ))
              : null}
            {name
              ? filteredProducts
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
              ? filteredProducts
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
              ? filteredProducts
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
              ? filteredProducts
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
    </div>
  );
}
