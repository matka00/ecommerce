import React, { useEffect, useState } from "react";
import "swiper/css";
import { client } from "../../library/client";
import ProductCard from "./ProductCard";
import { register } from "swiper/element/bundle";

import "./HomeProductSwiper.css";

register();

function HomeProductSwiper() {
  const [products, setProducts] = useState(null);
  console.log(products);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "products"]{
              name,
              slug,
              species,
              "image": image[]{
                "url": asset->url,
              },
              hexCode,
            }`
      )
      .then((data) => setProducts(data.slice(0, 12)))
      .catch(console.error);
  }, []);

  return (
    <>
      {products && (
        <swiper-container
          effect="coverflow"
          loop="true"
          grab-cursor="true"
          mousewheel="true"
          centered-slides="true"
          initial-slide="6"
          looped-slides="4"
          slides-per-view="auto"
          coverflow-effect-rotate="0"
          coverflow-effect-stretch="0"
          coverflow-effect-depth="100"
          coverflow-effect-modifier="3"
          coverflow-effect-slide-shadows="true"
          autoplay-disable-on-interaction="false"
          autoplay-delay="1000"
          speed="4000"
        >
          {products.map((product) => (
            <swiper-slide>
              <ProductCard
                key={product.name + product.slug}
                product={product}
              />
            </swiper-slide>
          ))}
        </swiper-container>
      )}
    </>
  );
}

export default HomeProductSwiper;
