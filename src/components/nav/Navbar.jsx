import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";

import Cart from "../cart/Cart";
import { useStateContext } from "../../context/StateContext";

function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <>
      <div className="navbar-cont">
        <Link to="/" className="navbar-logo">
          Handmade Shop
        </Link>
        <Link to="/products">Products</Link>
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
      </div>
    </>
  );
}

export default Navbar;
