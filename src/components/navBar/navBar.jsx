import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCart, setSearch } from "../../features/userSlice";
import { Badge } from "@nextui-org/react";
import Logo from "../../assests/logo1.png";
import style from "./index.module.css";

export default function NavBar() {
  const cart = useSelector(selectCart);
  const [isSticky, setIsSticky] = useState(false);
  const path = window.location.pathname;
  const dispatch = useDispatch()

  useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <div className={`${style.navContainer} ${isSticky ? style.sticky : ""}`} >
      <nav className={`navbar navbar-expand-lg bg-body-tertiary d-flex flex-row align-items-center ${style.stickyNav}`}>
        <div className="container-fluid">
          <a
            className="navbar-brand d-flex flex-row gap-2 align-items-center"
            href="/products"
          >
            <img src={Logo} style={{ width: 100, height: 100 }} /> Star Mobiles
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

          <div className="collapse navbar-collapse d-flex align-items-center" id="navbarNavDropdown">
            <ul className="navbar-nav d-flex align-items-center gap-2">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Products
                </a>
              </li>
              {path !== "/" ? (
                <input
                  type="search"
                  onChange={e => {dispatch(setSearch(e.target.value))}}
                  className={`${style.search}`}
                  placeholder="search here"
                />
              ) : null}
              <li className="nav-item">
                <Badge content={cart.length} color="primary">
                  <a className="nav-link" href="/checkout">
                    Cart <i className="bi bi-bag"></i>
                  </a>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
