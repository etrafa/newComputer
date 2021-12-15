import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import logo from "./logo.png";

const Header = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className="header__container">
        <div
          className={
            isActive
              ? "hamburger__menu__content__deactive"
              : "hamburger__menu__content"
          }
        >
          <FontAwesomeIcon
            className={isActive ? "windowClose__icon" : "windowClose__icon"}
            onClick={handleToggle}
            icon={faWindowClose}
          ></FontAwesomeIcon>
          <Link to={"/"}>HOME</Link>
          <hr />
          <Link to={"./national-team"}>NATIONAL TEAM</Link>
          <hr />
          <Link to={"./premier-leauge"}>PREMIER LEAUGE</Link>
          <hr />
          <Link to={"./bundesliga"}>BUNDESLIGA</Link>
          <hr />
          <Link to={"./laliga-leauge"}>LA LIGA</Link>
          <hr />
          <Link to={"./ligue-one"}>LIGUE 1</Link>
          <hr />
          <Link to={"./other-clubs"}>OTHER CLUBS</Link>
          <hr />
        </div>
        <FontAwesomeIcon
          className="hamburgerMenu__icon"
          onClick={handleToggle}
          icon={faBars}
        ></FontAwesomeIcon>
        <div className="header__container__right">
          <FontAwesomeIcon
            className="searchBar__icon"
            icon={faSearch}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="user__icon"
            icon={faUser}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="shoppingCart__icon"
            icon={faShoppingCart}
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
      </div>
    </>
  );
};

export default Header;
