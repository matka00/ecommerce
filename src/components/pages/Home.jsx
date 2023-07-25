import React, { useEffect, useState } from "react";
import "./Home.css";

import { client } from "../../library/client";
import HeroBanner from "../HeroBanner/HeroBanner";
import ProductCard from "../products/ProductCard";
import FooterBanner from "../Footer/FooterBanner";

function Home() {
  const [products, setProducts] = useState(null);
  const [bannerProduct, setBannerProduct] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product"]{
          name,
          slug,
          price,
          details,
          "image": image[]{
            "url": asset->url,
          },
          hexCode,
        }`
      )
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "banner"]{
          buttonText,
          product,
          description,
          smallText,
          midText,
          largeText1,
          largeText2,
          discount,
          saleTime,
          image,
          hexCode,
        }`
      )
      .then((data) => setBannerProduct(data))
      .catch(console.error);
  }, []);

  console.log(products);
  console.log(bannerProduct);

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
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
      {bannerProduct && <FooterBanner footerBanner={bannerProduct[1]} />}
    </>
  );
}

export default Home;
