import React, { useEffect, useState } from "react";
import { client } from "../../library/client";
import ProductCard from "../products/ProductCard";
import NoProduct from "../ui/NoProduct";

function Others() {
  const [others, setOthers] = useState([]);
  console.log(others);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "products" && species == "other"]{
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
      .then((data) => setOthers(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="products-heading">
        <h2>Knitted Friends</h2>
        <p>Magic from yarn</p>
      </div>

      <div className="products-container">
        {others.length > 0 &&
          others.map((product) => (
            <ProductCard key={product.name + product.slug} product={product} />
          ))}
        {others.length === 0 && <NoProduct />}
      </div>
    </>
  );
}

export default Others;
