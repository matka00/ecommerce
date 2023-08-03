import React from "react";
import "./NoProduct.css";

function NoProduct() {
  return (
    <>
      <p className="no-product-text">
        {
          "Sorry, we don't have products in this category at the moment. Please check back later :)"
        }
      </p>
    </>
  );
}

export default NoProduct;
