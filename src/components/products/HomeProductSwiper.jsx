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

      {/* {products && (
        <swiper-container
          loop="true"
          slides-per-view="auto"
          centeredSlides="true"
          navigation="false"
          pagination="false"
          mousewheel="true"
          preventClicks="true"
          grabCursor="true"
          spacebetween="1"
          autoplay-delay="1"
          speed="6000"
          autoplay-disable-on-interaction="false"
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
      )} */}

      {/* {products && (
        <Swiper
          loop={"true"}
          spaceBetween={50}
          slidesPerView={2}
          autoplay={{ delay: 2000 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {products.map((product) => (
            <SwiperSlide>
              <ProductCard
                key={product.name + product.slug}
                product={product}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )} */}
    </>
  );
}

export default HomeProductSwiper;
