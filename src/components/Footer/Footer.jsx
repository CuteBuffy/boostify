import React from "react";
import { Link, useLocation } from "react-router-dom";

import HomeIcon from "../../icons/home.svg";
import OrderIcon from "../../icons/order.svg";
import CartIcon from "../../icons/cart.svg";
import SupportIcon from "../../icons/support.svg";

import HomeIconActive from "../../icons/homeActive.svg";
import OrderIconActive from "../../icons/orderActive.svg";
import CartIconActive from "../../icons/cartActive.svg";

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
