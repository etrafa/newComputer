import React from "react";
import ReactDOM from "react-dom";
import Banner from "./Banner/Banner";
import BestSellers from "./BestSellers/BestSellers";
import Footer from "./Footer/Footer";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Banner />
    <BestSellers />
    {/* <Footer /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
