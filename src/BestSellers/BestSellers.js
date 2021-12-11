import React from "react";
import "./bestSellers.css";
import bestSellersData from "./bestSellersData";
import "./bestSellers.css";

const HomePageSales = () => {
  return (
    <React.Fragment>
      <div className="sales__container">
        {bestSellersData.map((sales) => {
          const { id, text, image } = sales;
          return (
            <div key={id}>
              <img src={image} alt="" />
              <a href="#">
                <p>{text}</p>
              </a>
              <p className="best__seller__price">$ 50.00</p>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default HomePageSales;
