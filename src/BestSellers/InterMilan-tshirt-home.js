import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import interFront from "./bestSellers-asset/interFront.jpg";
import interBack from "./bestSellers-asset/interBack.jpg";
import interFrontSmall from "./bestSellers-asset/interFrontSmall.jpg";
import interBackSmall from "./bestSellers-asset/interBackSmall.jpg";
import "../Pages/ShirtSales.css";

const InterMilanTshirtHome = () => {
  const [image, setImage] = useState(interFront);

  return (
    <div className="shirtSales__container">
      <img className="mainShirt__front" src={image} alt="" />
      <div className="mainShirt__small">
        <img
          src={interFrontSmall}
          onClick={() => setImage(interFront)}
          alt=""
        />
        <img src={interBackSmall} onClick={() => setImage(interBack)} alt="" />
      </div>
      <h1>INTER MILAN HOME FOOTBALL SHIRT 21/22</h1>
      <hr />
      <div className="shirtSales__price__container">
        <p className="shirtSales__price">$50.00</p>
        <p className="in__stock">In Stock</p>
      </div>
      <hr className="price__hr" />
      <div className="user__star">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <hr className="user__star__hr" />
      <div className="size__chart">
        <a href="#">
          <p>Size Chart</p>
        </a>
        <a href="#">
          <p>Have a Question?</p>
        </a>
      </div>
      <hr className="size__chart__hr" />
      <div className="shipping__information">
        <ul>
          <li>Ship out within 1-3 business days.</li>
          <li>
            Shipping Time: DHL/Fedex (5-15 business days) | International mail
            (10-40 business days)
          </li>
        </ul>
      </div>
      <div className="tshirtSales__additional__parts">
        <div className="tshirt__size">
          <label htmlFor="size">
            <span>*</span>Size
          </label>
          <select name="size" id="size">
            <option value="#" selected disabled>
              -- Please Select --
            </option>
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
            <option value="xLarge">XL</option>
            <option value="2xLarge">2XL</option>
          </select>
        </div>
        <div className="tshirt__name">
          <label htmlFor="name">
            Name<span> +$3.00</span>
          </label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="tshirt__number">
          <label htmlFor="name">
            Number <span>+$3.00</span>
          </label>
          <input type="text" name="number" id="number" />
        </div>
        <p>* Required Fields</p>
      </div>
      <button>Add to Cart</button>
      <div className="heart__icon">
        <span>
          <FontAwesomeIcon icon={faHeart} />
        </span>
        <h4>ADD TO WISHLIST</h4>
      </div>
      <div className="thirt__description">
        <h1>DESCRIPTION</h1>
        <hr />
        <div className="tshirt__features">
          <div className="tshirt__list">
            <p>&gt; 2021-2022</p>
            <p>&gt; Men</p>
            <p>&gt; Short sleeves</p>
            <p>&gt; Breathable technology</p>
            <p>&gt; Club crest</p>
            <p>&gt; Shirt sponsor</p>
            <p>&gt; 100% Polyester</p>
          </div>
          <p className="tshirt__description__text">
            <span>Customize your jerseys: </span>In the options above you can
            also choose to customize this jersey with a name and number of your
            choice which is applied in store using official League printing, we
            also have the option to add patches too! Make this Football Shirt
            your own by entering your details correctly before heading to the
            checkout. Our variety of international shipping methods will have
            your jersey in your hands in no time!
          </p>
          <img src={interFront} alt="" />
          <img src={interBack} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InterMilanTshirtHome;
