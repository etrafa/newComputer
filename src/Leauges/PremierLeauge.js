import premierLeaugeData from "./PremierLeaugeData";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Leauges.css";

const PremierLeauge = () => {
  const [showItem, setShowItem] = useState(6);

  const showMoreItems = () => {
    setShowItem((prevValue) => prevValue + 6);
  };

  return (
    <>
      <div className="sales__container">
        {premierLeaugeData.slice(0, showItem).map((sales) => {
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

export default PremierLeauge;
