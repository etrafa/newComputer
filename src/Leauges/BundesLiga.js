import { useState } from "react";
import { Link } from "react-router-dom";
import "./Leauges.css";
import bundesLigaData from "./BundesLigaData";

const BundesLiga = () => {
  const [showItem, setShowItems] = useState(4);

  const showMoreItems = () => {
    setShowItems((previous) => previous + 4);
  };

  return (
    <>
      <div className="sales__container">
        {bundesLigaData.slice(0, showItem).map((sales) => {
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

export default BundesLiga;
