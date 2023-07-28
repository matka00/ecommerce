import React from "react";
import "./Home.css";

import HeroBanner from "../HeroBanner/HeroBanner";
import ProductCard from "../products/ProductCard";
import FooterBanner from "../Footer/FooterBanner";

function Home({ products, bannerProduct }) {
  return (
    <>
      {bannerProduct && <HeroBanner bannerProduct={bannerProduct[0]} />}
      <div className="products-heading">
        <h2>Knitted Friends</h2>
        <p>Magic from yarn</p>
      </div>

      <div className="products-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.name + product.slug} product={product} />
          ))}
      </div>
      {bannerProduct && <FooterBanner footerBanner={bannerProduct[1]} />}
    </>
  );
}

export default Home;
