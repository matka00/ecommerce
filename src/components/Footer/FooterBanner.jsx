import React from "react";
import "./FooterBanner.css";

import { urlFor } from "../../library/client";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function FooterBanner({ footerProduct }) {
  return (
    <>
      <div className="footer-banner-cont">
        <div className="footer-banner-left">
          <p className="discount">{footerProduct.discount}</p>
          <h3>{footerProduct.largeText}</h3>
          <p>{footerProduct.saleTime}</p>
        </div>
        <img
          src={urlFor(footerProduct.image)}
          alt={footerProduct.product}
          className="footer-banner-image"
        />
        <div className="footer-banner-right">
          <p>{footerProduct.smallText}</p>
          <h3>{footerProduct.midText}</h3>
          <p>{footerProduct.description}</p>
          <Link to="/products">
            <Button buttonStyle="light" type="button">
              {footerProduct.buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FooterBanner;
