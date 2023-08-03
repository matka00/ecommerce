import React, { useEffect, useState } from "react";
import { client } from "../../library/client";
import ProductCard from "../products/ProductCard";
import NoProduct from "../ui/NoProduct";

function Froggies() {
  const [froggies, setFroggies] = useState([]);
  console.log(froggies);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "products" && species == "froggie"]{
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
      .then((data) => setFroggies(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="products-heading">
        <h2>Knitted Froggies</h2>
        <p>Magic from yarn</p>
      </div>

      <div className="products-container">
        {froggies.length > 0 &&
          froggies.map((product) => (
            <ProductCard key={product.name + product.slug} product={product} />
          ))}
        {froggies.length === 0 && <NoProduct />}
      </div>
    </>
  );
}

export default Froggies;
