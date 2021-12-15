import { useState } from "react";
import { Link } from "react-router-dom";
import laLigaData from "./laLigaData";
import "./Leauges.css";

const LaLiga = () => {
  const [showItem, setShowItem] = useState(4);

  const showMoreItems = () => {
    setShowItem((previous) => previous + 4);
  };

  return (
    <>
      <div className="sales__container">
        {laLigaData.slice(0, showItem).map((sales) => {
          const { id, text, image, price, route } = sales;
          return (
            <div key={id}>
              <Link to={route}>
                <img src={image} alt="" />
              </Link>
              <Link to={route}>{text}</Link>
              <p className="best__seller__price">{price}</p>
            </div>
          );
        })}
      </div>
      <button className="show__more__button" onClick={showMoreItems}>
        Show More
      </button>
    </>
  );
};

export default LaLiga;
