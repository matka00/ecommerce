import React, { useEffect, useState } from "react";
import { client } from "../../library/client";
import ProductCard from "../products/ProductCard";
import NoProduct from "../ui/NoProduct";

function Doggies() {
  const [doggies, setDoggies] = useState([]);
  console.log(doggies);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "products" && species == "doggie"]{
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
      .then((data) => setDoggies(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="products-heading">
        <h2>Knitted Doggies</h2>
        <p>Magic from yarn</p>
      </div>

      <div className="products-container">
        {doggies.length > 0 &&
          doggies.map((product) => (
            <ProductCard key={product.name + product.slug} product={product} />
          ))}
        {doggies.length === 0 && <NoProduct />}
      </div>
    </>
  );
}

export default Doggies;
