import React, { useState, useEffect } from "react";
import { onValue, ref, set } from "firebase/database";
import { useParams } from "react-router-dom";
import style from "./index.module.css";
import { db } from "../../firebase";
import ProductCardComponent from "../../components/productCard/productCard";

export default function Products() {
  const [products, setProducts] = useState();
  const { name } = useParams();

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

  return (
    <div className="d-flex flex-column p-2 rounded">
     
      {name ? (
        <p className="badge bg-success text-white">{name.toUpperCase()}</p>
      ) : null}
      <div
        className="d-flex p-4 gap-2 align-items-center justify-content-center flex-wrap rounded shadow-sm overflow-auto w-100"
      >
        {!name
          ? products?.map((data) => (
              <ProductCardComponent
                name={data.name.slice(0, 50)}
                offer={data.offer}
                details={data}
                image={data.image1}
                price={data.price}
              />
            ))
          : products
              ?.filter((data) => data.category.toLowerCase().includes(name))
              .map((data) => (
                <ProductCardComponent
                  name={data.name.slice(0, 50)}
                  offer={data.offer}
                  details={data}
                  image={data.image1}
                  price={data.price}
                />
              ))}
      </div>
    </div>
  );
}
