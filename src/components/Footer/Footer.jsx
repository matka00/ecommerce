import React from "react";
import "./Footer.css";

import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className="footer-cont">
        <p>©2023 Handmade Shop </p>
        <p className="icons">
          <AiFillInstagram />
          <AiFillFacebook />
        </p>
      </div>
    </>
  );
}

export default Footer;
