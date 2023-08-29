import React from "react";
import "./Footer.css";

import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GiWool } from "react-icons/gi";

function Footer() {
  return (
    <>
      <footer className="footer-cont">
        <div className="footer-links-cont">
          <div className="list-wrapper help">
            <h4>Help & Support</h4>
            <ul>
              <li>
                <Link to="/faqs">FAQ</Link>
              </li>
              <li>
                <Link to="/">Delivery & Payment</Link>
              </li>
              <li>
                <Link to="/">Returns & Refunds</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="list-wrapper">
            <h4>About</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/">Privacy Notice</Link>
              </li>
              <li>
                <Link to="/">Company Information</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="footer-logo">
          <Link to="/">
            <GiWool />
            hms
          </Link>
        </p>
        <p>©2023 Handmade Shop </p>
        <p className="icons">
          <AiFillInstagram />
          <AiFillFacebook />
        </p>
      </footer>
    </>
  );
}

export default Footer;
