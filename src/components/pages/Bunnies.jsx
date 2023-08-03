import React, { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";
import NoProduct from "../ui/NoProduct";
import { client } from "../../library/client";

function Bunnies() {
  const [bunnies, setBunnies] = useState([]);
  console.log(bunnies);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "products" && species == "bunny"]{
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
      .then((data) => setBunnies(data))
      .catch(console.error);
  }, []);

  /* let filteredProducts = products.filter((product) => {
    return product.species === "bunny";
  });

  console.log(filteredProducts);
 */

  return (
    <>
      <div className="products-heading">
        <h2>Knitted Bunnies</h2>
        <p>Magic from yarn</p>
      </div>

      <div className="products-container">
        {bunnies.length > 0 &&
          bunnies.map((product) => (
            <ProductCard key={product.name + product.slug} product={product} />
          ))}
        {bunnies.length === 0 && <NoProduct />}
      </div>
    </>
  );
}

export default Bunnies;
