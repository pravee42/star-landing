import React, { useEffect } from "react";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import AppRouter from "./components/navBar/routing";
import Routing from "./routing/routing";
import { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./components/navBar/Footer/Footer";

export default function App() {
  return (
    <Router>
      <NextUIProvider>
        <Toaster position="top-center" />
        <div style={{ position: "sticky" }}>
          <NavBar />
        </div>
        <div className="App">
          <Routing />
          <AppRouter />
        </div>
        <div style={{ position: "sticky" }}>
          <Footer />
        </div>
      </NextUIProvider>
    </Router>
  );
}
