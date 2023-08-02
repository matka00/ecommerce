import React from "react";
import "./Products.css";
import ProductCategories from "../productCategories/ProductCategories";

function Products({ products }) {
  return (
    <>
      <div className="products-heading">
        <h2>Knitted Friends</h2>
        <p>Magic from yarn</p>
      </div>
      <ProductCategories />
    </>
  );
}

export default Products;
