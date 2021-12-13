import { useState } from "react";
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
            isActive ? "hamburger__menu__content" : "hamburgerMenu__icon"
          }
        >
          <FontAwesomeIcon
            className={isActive ? "windowClose__icon" : "hamburgerMenu__icon"}
            onClick={handleToggle}
            icon={faWindowClose}
          ></FontAwesomeIcon>
          <a href="#">HOME</a>
          <hr />
          <a href="#">NEW ARRIVALS</a>
          <hr />
          <a href="#">NATIONAL TEAM</a>
          <hr />
          <a href="#">PREMIER LEAUGE</a>
          <hr />
          <a href="#">BUNDESLIGA</a>
          <hr />
          <a href="#">SERIA A LEAUGE</a>
          <hr />
          <a href="#">LA LIGA LEUAGE</a>
          <hr />
          <a href="#">LIGUE 1</a>
          <hr />
          <a href="#">OTHER CLUBS</a>
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
        <img src={logo} alt="" />
      </div>
    </>
  );
};

export default Header;
