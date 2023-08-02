import React from "react";
import "./ProductCategories.css";

import { GiRabbit, GiSittingDog, GiFrogPrince, GiWool } from "react-icons/gi";
import { Link } from "react-router-dom";

import CategoryData from "../../assets/productCategories.json";

function ProductCategories() {
  return (
    <>
      {CategoryData && (
        <div className="category-card-cont">
          {CategoryData.map((category) => {
            let categoryIcon;

            switch (category.category) {
              default:
                categoryIcon = <GiWool />;
                break;
              case "Bunnies":
                categoryIcon = <GiRabbit />;
                break;
              case "Doggies":
                categoryIcon = <GiSittingDog />;
                break;
              case "Froggies":
                categoryIcon = <GiFrogPrince />;
                break;
              case "Others":
                categoryIcon = <GiWool />;
            }

            return (
              <Link to={`/products/${category.link}`} key={category.id}>
                <div className="category-card-wrapper">
                  <div className="category-card">
                    <p className="category-icon">{categoryIcon}</p>
                    <p className="category-text">{category.category}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

export default ProductCategories;
