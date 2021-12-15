import nationalTeamData from "./NationalTeamData";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Leauges.css";

const NationalTeam = () => {
  const showMoreItems = () => {
    setShowItem((prevValue) => prevValue + 6);
  };

  const [showItem, setShowItem] = useState(6);
  return (
    <>
      <div className="sales__container">
        {nationalTeamData.slice(0, showItem).map((sales) => {
          const { id, text, image, route } = sales;
          return (
            <div key={id}>
              <Link to={route}>
                <img src={image} alt="" />
              </Link>
              <Link to={route}>{text}</Link>
              <p className="best__seller__price">$ 50.00</p>
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

export default NationalTeam;
