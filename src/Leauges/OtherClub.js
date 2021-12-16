import { useState } from "react";
import { Link } from "react-router-dom";
import otherClubData from "./OtherClubData";
import "./Leauges.css";

const OtherClub = () => {
  const [showItem, setShowItem] = useState(6);

  const showMoreItems = () => {
    setShowItem((previous) => previous + 6);
  };

  return (
    <>
      <div className="sales__container">
        {otherClubData.slice(0, showItem).map((sales) => {
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

export default OtherClub;
