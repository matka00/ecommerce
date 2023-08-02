import React from "react";
import "./HeroBanner.css";
import { Link } from "react-router-dom";

import { urlFor } from "../../library/client";
import Button from "../ui/Button";

function HeroBanner({ bannerProduct }) {
  /*   console.log(bannerProduct);
  console.log(bannerProduct.image);
 */
  return (
    <>
      <div className="hero-banner-cont">
        <div className="hero-sale-details">
          <p className="small-text">{bannerProduct.smallText}</p>
          <h3>{bannerProduct.midText}</h3>
          <h1>{bannerProduct.largeText1}</h1>
          <img
            src={urlFor(bannerProduct.image)}
            alt={bannerProduct.product}
            className="hero-banner-image"
          />
        </div>
        <div className="hero-product">
          <Link to={`/product/${bannerProduct.product}`}>
            <Button buttonStyle="dark" type="button">
              {bannerProduct.buttonText}
            </Button>
          </Link>
          <div className="desc">
            <h5>{bannerProduct.product}</h5>
            <p>{bannerProduct.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
