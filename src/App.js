import React, { useEffect } from "react";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import AppRouter from "./components/navBar/routing";
import Routing from "./routing/routing";
import { NextUIProvider } from "@nextui-org/react";
import { Banner1, ProductsData } from "./config/api";

export default function App() {
  // useEffect(() => {
  //   Banner1();
  // }, []);

  return (
    <Router>
      <NextUIProvider>
        <div style={{ position: "sticky" }}>
          <NavBar />
        </div>
        <div className="App">
          <Routing />
          <AppRouter />
        </div>
      </NextUIProvider>
    </Router>
  );
}
