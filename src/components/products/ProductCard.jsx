import React from "react";
import "./ProductCard.css";

import { urlFor } from "../../library/client";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  /* console.log(product); */
  
  return (
    <>
      <Link to={`/product/${product.slug.current}`}>
        <div className="product-card">
          <div className="product-image-cont">
            <img
              src={urlFor(product.image && product.image[0].url)}
              alt={product.name}
              className="product-image"
            />
          </div>
          <p className="product-name">{product.name}</p>
          <p className="product-price">{product.price} €</p>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
