import React, { useEffect, useState } from "react";

import "./ProductDetails.css";
import { client, urlFor } from "../../library/client";
import { useParams } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import ProductCard from "./ProductCard";
import Button from "../ui/Button";

function ProductDetails() {
  /* const { slug } = useParams();

  const thisProduct = products.find((product) => product.slug.current === slug);
  /*console.log(thisProduct)*/

  const { slug } = useParams();
  const [thisProduct, setThisProduct] = useState(null);
  const [mayLikeProducts, setMayLikeProducts] = useState(null);
  const [index, setIndex] = useState(0);

  const { decreaseQuantity, increaseQuantity, quantity, onAdd } =
    useStateContext();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "products" && slug.current == '${slug}'][0]{
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
      .then((data) => setThisProduct(data))
      .catch(console.error);
  }, [slug]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "products" && slug.current != '${slug}']{
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
      .then((data) => setMayLikeProducts(data))
      .catch(console.error);
  }, [slug]);

  console.log(thisProduct);
  console.log(mayLikeProducts);

  return (
    <>
      {thisProduct && (
        <div className="product-details-wrapper">
          <div className="product-detail-cont">
            <div>
              <div className="image-cont">
                <img
                  src={urlFor(
                    thisProduct.image && thisProduct.image[index].url
                  )}
                  alt={thisProduct.name}
                />
              </div>
              <div className="small-images-cont">
                {thisProduct.image?.map((item, i) => (
                  <img
                    key={item.url}
                    src={urlFor(item.url)}
                    alt={thisProduct.name}
                    onMouseEnter={() => setIndex(i)}
                    className={
                      i === index ? "small-image selected-image" : "small-image"
                    }
                  />
                ))}
              </div>
            </div>
            <div className="product-detail-desc">
              <h2>{thisProduct.name}</h2>
              <div className="reviews">
                <div>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <p>{"(20)"}</p>
              </div>
              <p>{thisProduct.description}</p>
              <p className="price">{thisProduct.price} €</p>
              <div className="quantity">
                <h3>Quantity:</h3>
                <p className="quantity-desc">
                  <span className="minus" onClick={decreaseQuantity}>
                    <AiOutlineMinus />
                  </span>
                  <span className="num">{quantity}</span>
                  <span className="plus" onClick={increaseQuantity}>
                    <AiOutlinePlus />
                  </span>
                </p>
              </div>
              <div className="buttons">
                <Button
                  buttonStyle="light add-to-cart"
                  type="button"
                  onClick={() => onAdd(thisProduct, quantity)}
                >
                  Add to Cart
                </Button>
                <Button buttonStyle="dark buy-now" type="button">
                  Buy Now
                </Button>
              </div>
              <div className="other-details">
                <h4>Details:</h4>
                <p className="details-text">{thisProduct.details}</p>
                <p>
                  <mark>Materials:</mark> {thisProduct.materials}
                </p>
                <p>
                  <mark>Size:</mark> {thisProduct.size}
                </p>
                <p>
                  <mark>Treatment:</mark> {thisProduct.treatment}
                </p>
              </div>
            </div>
          </div>
          {mayLikeProducts && (
            <div className="maylike-products-wrapper">
              <h2>You may also like</h2>
              <div className="marquee">
                <div className="maylike-products-cont track">
                  {mayLikeProducts.map((item) => (
                    <ProductCard key={item.name} product={item} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default ProductDetails;
