// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaCcMastercard } from "@fortawesome/free-solid-svg-icons";
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
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Delivery Guarantee</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
            </ul>
          </div>
          <div className="customer__service">
            <h3>CUSTOMER SERVICE</h3>
            <hr />
            <ul>
              <li>
                <a href="#">Size Chart</a>
              </li>
              <li>
                <a href="#">FAQ & Help</a>
              </li>
              <li>
                <a href="#">Shipping & Delivery</a>
              </li>
              <li>
                <a href="#">Return Policy</a>
              </li>
              <li>
                <a href="#">Payment Method</a>
              </li>
            </ul>
          </div>
          <div className="my__account">
            <h3>MY ACCCOUNT</h3>
            <hr />
            <ul>
              <li>
                <a href="#">LOG IN</a>
              </li>
              <li>
                <a href="#">SIGN UP</a>
              </li>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">My Orders</a>
              </li>
              <li>
                <a href="#">Forget Password</a>
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
            © 2021 HN Football Store All rights reserved.
          </div>
          <div className="footer__copyright__right"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
