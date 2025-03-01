import React from "react";
import { Link, useLocation } from "react-router-dom";

import HomeIcon from "../../icons/home.png";
import OrderIcon from "../../icons/order.png";
import CartIcon from "../../icons/cart.png";
import SupportIcon from "../../icons/support.png";

import HomeIconActive from "../../icons/homeActive.png";
import OrderIconActive from "../../icons/orderActive.png";
import CartIconActive from "../../icons/cartActive.png";

import "./Footer.css";

const Footer = () => {
  const pageLocation = useLocation();

  return (
    <div className="page__footer">
      <div className="footer__icons">
        <Link className={`footer__icon ${pageLocation.pathname === "/" || pageLocation.pathname === "/login" || pageLocation.pathname === "/register" ? "page__active" : ""}`} to="/">
          <img
            src={pageLocation.pathname === "/" || pageLocation.pathname === "/login" || pageLocation.pathname === "/register" ? HomeIconActive : HomeIcon}
            alt="Home"
          />
        </Link>
        <Link className={`footer__icon ${pageLocation.pathname === "/order" ? "page__active" : ""}`} to="/order">
          <img
            src={pageLocation.pathname === "/order" ? OrderIconActive : OrderIcon}
            alt="Order"
          />
        </Link>
        <Link className={`footer__icon ${pageLocation.pathname === "/cart" ? "page__active" : ""}`} to="/cart">
          <img
            src={pageLocation.pathname === "/cart" ? CartIconActive : CartIcon}
            alt="Cart"
          />
        </Link>
        <a
          className="footer__icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me//riseapp_support"
        >
          <img src={SupportIcon} alt="Support" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
