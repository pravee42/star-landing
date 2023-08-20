import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../features/userSlice";
import { Badge } from "@nextui-org/react";
import style from './index.module.css'

export default function NavBar() {
  const cart = useSelector(selectCart);
  
 // const products=["mobiles","computer accesories"];
 // const sub1=["all mobile phone","all mobile accesories","case & covers","screen protectors","power bank","republish and open box","arvo activated piece","wearable device","smart home device"]
  

  

  return (
    <div style={{ position: "sticky" }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Star Mobiles
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>



          <input className={`${style.search}`}  placeholder="search here"/>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item"  >
                <a className="nav-link" href="/products"  >
                  Productsiiiii
                </a>
                
             
              </li>
              <li className="nav-item">
                <Badge content={cart.length} color="primary">
                  <a className="nav-link" href="/checkout">
                    Cart <i className="bi bi-bag"></i>
                  </a>
                </Badge>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
