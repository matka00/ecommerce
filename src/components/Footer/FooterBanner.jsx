import React from "react";
import "./FooterBanner.css";

import { urlFor } from "../../library/client";
import { Link } from "react-router-dom";

function FooterBanner({ footerBanner }) {
  /*  console.log(footerBanner); */
  return (
    <>
      <div className="footer-banner-cont">
        <div className="footer-banner-left">
          <p className="discount">{footerBanner.discount}</p>
          <h3>{footerBanner.largeText1}</h3>
          <p>{footerBanner.saleTime}</p>
        </div>
        <img
          src={urlFor(footerBanner.image)}
          alt={footerBanner.product}
          className="footer-banner-image"
        />
        <div className="footer-banner-right">
          <p>{footerBanner.smallText}</p>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.description}</p>
          <Link to={`/product/${footerBanner.product}`}>
            <button type="button">{footerBanner.buttonText}</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FooterBanner;
