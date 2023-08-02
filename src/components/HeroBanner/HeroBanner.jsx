import React from "react";
import "./HeroBanner.css";
import { Link } from "react-router-dom";

import { urlFor } from "../../library/client";
import Button from "../ui/Button";

function HeroBanner({ heroProduct }) {
  
  return (
    <>
      <div className="hero-banner-cont">
        <div className="hero-sale-details">
          <p className="small-text">{heroProduct.smallText}</p>
          <h3>{heroProduct.midText}</h3>
          <h1>{heroProduct.largeText}</h1>
          <img
            src={urlFor(heroProduct.image)}
            alt={heroProduct.product}
            className="hero-banner-image"
          />
        </div>
        <div className="hero-product">
          <Link to={`/products/${heroProduct.slug.current}`}>
            <Button buttonStyle="dark" type="button">
              {heroProduct.buttonText}
            </Button>
          </Link>
          <div className="desc">
            <h5>{heroProduct.product}</h5>
            <p>{heroProduct.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
