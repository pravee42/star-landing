import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./index.module.css";
import { Image } from "@nextui-org/react";
import { onValue, ref } from "firebase/database";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { selectProduct } from "../../features/productSlice";
import Productlanding from "../landing/parts/products/products";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const products = useSelector(selectProduct);
  const dispatch = useDispatch();
  const [preview, setPreview] = useState();

  useEffect(() => {
    const ProductsData = () => {
      onValue(ref(db, `product/${id}/`), (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          setProduct(data);
          setPreview(data.image1);
        }
      });
    };
    ProductsData();
  }, [id]);

  return (
    <div className={`${style.container}`}>
      <div className={`${style.ProductContainer}`}>
        {product ? (
          <div
            className={`${style.imageContainer} align-items-center justify-content-center`}
          >
            <img
              src={preview}
              alt="product"
              className={`${style.ProductImage} rounded shadow-sm`}
            />
            <div className={`${style.subimageContainer}`}>
              <Image
                width={100}
                className="rounded cursor-pointer pointer"
                style={{ cursor: "pointer" }}
                onClick={() => setPreview(product.image1)}
                height={100}
                src={product?.image1}
                isZoomed
                fallbackSrc="https://via.placeholder.com/300x200"
                alt={product.name}
              />
              <Image
                width={100}
                className="rounded cursor-pointer pointer"
                style={{ cursor: "pointer" }}
                height={100}
                onClick={() => setPreview(product.image2)}
                src={product?.image2}
                isZoomed
                fallbackSrc="https://via.placeholder.com/300x200"
                alt={product.name}
              />
              <Image
                width={100}
                height={100}
                onClick={() => setPreview(product.image3)}
                src={product?.image3}
                isZoomed
                className="rounded cursor-pointer pointer"
                style={{ cursor: "pointer" }}
                fallbackSrc="https://via.placeholder.com/300x200"
                alt={product.name}
              />
            </div>
          </div>
        ) : null}

        {product && (
          <div className={`${style.TextContainer}`}>
           <div className="d-flex gap-2">
              <p
              className="badge bg-primary text-white"
              style={{ width: "fit-content" }}
            >
              {product.category}
            </p>
             <p
              className="badge bg-warning text-dark"
              style={{ width: "fit-content" }}
            >
              {product.brand}
            </p>
           </div>
            <p className={`h5`}>{product.name}</p>
            <p className={`h6 text-secondary`}>{product.description}</p>
            <p className="h3 text-success" style={{ width: "fit-content" }}>
              ₹ {product.price}
            </p>
            <div className="py-2 borderd rounded">
              <div className="d-flex flex-row gap-2 align-items-center">
                <p className="h6 text-dark">Storage</p>
                <p className="h5 text-primary">{product.storage} GB</p>
              </div>
               <div className="d-flex flex-row gap-2 align-items-center">
                <p className="h6 text-dark">Display Size</p>
                <p className="h5 text-primary">{product.displaysize} In</p>
              </div>
                 <div className="d-flex flex-row gap-2 align-items-center">
                <p className="h6 text-dark">Brand</p>
                <p className="h5 text-warning">{product.brand}</p>
              </div>
            </div>
            <div className={`${style.ButtonContainer}`}>
              <button
                onClick={() =>
                  dispatch(
                    addtoCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image1,
                      quantity: 1,
                      total: parseInt(1) * parseInt(product.price)
                    })
                  )
                }
                className={`btn btn-primary p-2 h-5`}
              >
                {" "}
                Add to cart{" "}
              </button>
            </div>
          </div>
        )}
      </div>
      <Productlanding
        data={products ? products : []}
        category={""}
        title={"Trending"}
      />
    </div>
  );
};

export default ProductDetails;
