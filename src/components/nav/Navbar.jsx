import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";

function Navbar() {
  return (
    <>
      <div className="navbar-cont">
        <Link to="/" className="navbar-logo">
          Handmade Shop
        </Link>
        <button type="button" className="cart-icon">
          <AiOutlineShopping />
          <span className="cart-item-qty">1</span>
        </button>
      </div>
    </>
  );
}

export default Navbar;
