import visa from "./footer-asset/visa.png";
import masterCard from "./footer-asset/mastercard.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__lists">
          <div className="company__info">
            <h3>COMPANY INFO</h3>
            <hr />
            <ul>
              <li>
                <Link to={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link to={"/delivery-guarantee"}>Delivery Guarantee</Link>
              </li>
              <li>
                <Link to={"/privacy-policy"}>Privacy Policy</Link>
              </li>
              <li>
                <Link to={"/terms-of-use"}>Terms of Use</Link>
              </li>
            </ul>
          </div>
          <div className="customer__service">
            <h3>CUSTOMER SERVICE</h3>
            <hr />
            <ul>
              <li>
                <Link to={"/size-chart"}>Size Chart</Link>
              </li>
              <li>
                <Link to={"/faq-help"}>FAQ & Help</Link>
              </li>
              <li>
                <Link to={"/shipping-delivery"}>Shipping & Delivery</Link>
              </li>
              <li>
                <Link to={"/return-policy"}>Return Policy</Link>
              </li>
              <li>
                <Link to={"/payment-method"}>Payment Method</Link>
              </li>
            </ul>
          </div>
          <div className="my__account">
            <h3>MY ACCCOUNT</h3>
            <hr />
            <ul>
              <li>
                <Link to={"/log-in"}>LOG IN</Link>
              </li>
              <li>
                <Link to={"/sign-up"}>SIGN UP</Link>
              </li>
              <li>
                <Link to={"/my-account"}>My Account</Link>
              </li>
              <li>
                <Link to={"/my-orders"}>My Orders</Link>
              </li>
              <li>
                <Link to={"/forget-password"}>Forget Password</Link>
              </li>
            </ul>
          </div>
          <div className="contact__us">
            <h3>CONTACT US</h3>
            <hr />
            <ul>
              <li>
                <a href="#">example@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="gmail__hr" />
        <div className="footer__copyright">
          <div className="footer__copyright__left">
            © 2021 <span>EL Store</span> All rights reserved.
          </div>
          <div className="footer__copyright__right">
            <img src={visa} alt="" />
            <img src={masterCard} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
