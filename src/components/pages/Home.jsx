import React, { useEffect, useState } from "react";
import "./Home.css";

import HeroBanner from "../heroBanner/HeroBanner";
import ProductCard from "../products/ProductCard";
import FooterBanner from "../footer/FooterBanner";
import { client } from "../../library/client";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

function Home() {
  const [heroProduct, setHeroProduct] = useState(null);
  const [footerProduct, setFooterProduct] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "banners" && bannerType == "heroBanner"]{
          bannerType,
          product,
          slug,
          description,
          buttonText,
          smallText,
          midText,
          largeText,
          discount,
          saleTime,
          image,
          hexCode,
        }`
      )
      .then((data) => setHeroProduct(data[0]))
      .catch(console.error);
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "products"]{
          name,
          slug,
          species,
          price,
          description,
          details,
          materials,
          size,
          treatment,
          "image": image[]{
            "url": asset->url,
          },
          hexCode,
        }`
      )
      .then((data) => setProducts(data.slice(0, 5)))
      .catch(console.error);
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "banners" && bannerType == "footerBanner"]{
          bannerType,
          product,
          slug,
          description,
          buttonText,
          smallText,
          midText,
          largeText,
          discount,
          saleTime,
          image,
          hexCode,
        }`
      )
      .then((data) => setFooterProduct(data[0]))
      .catch(console.error);
  }, []);

  /* console.log(heroProduct);
  console.log(footerProduct); */

  return (
    <>
      {heroProduct && <HeroBanner heroProduct={heroProduct} />}

      <div className="products-heading">
        <h2>Knitted Friends</h2>
        <p>Magic from yarn</p>
      </div>

      <div className="products-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.name + product.slug} product={product} />
          ))}
        <div className="product-image-cont check-all-cont">
          <Link to="/products">
            <Button buttonStyle="light check-all-button" type="button">
              Check all buddies
            </Button>
          </Link>
        </div>
      </div>

      {footerProduct && <FooterBanner footerProduct={footerProduct} />}
    </>
  );
}

export default Home;
