import React from "react";
import "./FooterBanner.css";

import { urlFor } from "../../library/client";
import { Link } from "react-router-dom";

function FooterBanner({ footerBanner }) {
  console.log(footerBanner);
  return (
    <div className="footer-banner-cont">
      <div className="footer-banner-desc">
        <div className="left">
          <p>{footerBanner.discount}</p>
          <h3>{footerBanner.largeText1}</h3>
          <p>{footerBanner.saleTime}</p>
        </div>
        <div className="right">
          <p>{footerBanner.smallText}</p>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.description}</p>
          <Link to={`/product/${footerBanner.product}`}>
            <button type="button">{footerBanner.buttonText}</button>
          </Link>
        </div>
        <img
          src={urlFor(footerBanner.image)}
          alt={footerBanner.product}
          className="footer-banner-image"
        />
      </div>
    </div>
  );
}

export default FooterBanner;
