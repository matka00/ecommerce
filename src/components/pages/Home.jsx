import React, { useEffect, useState } from "react";
import "./Home.css";

import HeroBanner from "../home/heroBanner/HeroBanner";
import FooterBanner from "../home/footerBanner/FooterBanner";
import { client } from "../../library/client";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import HomeProductSwiper from "../products/HomeProductSwiper";
import AboutSection from "../home/AboutSection";

function Home() {
  const [heroProduct, setHeroProduct] = useState(null);
  const [footerProduct, setFooterProduct] = useState(null);
  const [aboutData, setAboutData] = useState(null);

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

  useEffect(() => {
    client
      .fetch(
        `*[_type == "about"]{
            paragraph1,
            image,
            hexCode,
        }`
      )
      .then((data) => setAboutData(data[0]))
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
        <HomeProductSwiper />
        <div className="check-all-cont">
          <Link to="/products">
            <Button buttonStyle="dark check-all-button" type="button">
              Check all buddies
            </Button>
          </Link>
        </div>
      </div>

      {aboutData && <AboutSection aboutData={aboutData}/>}

      {footerProduct && <FooterBanner footerProduct={footerProduct} />}
    </>
  );
}

export default Home;
