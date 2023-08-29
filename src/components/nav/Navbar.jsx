import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

import { GiWool } from "react-icons/gi";
import { AiOutlineShopping } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

import Cart from "../cart/Cart";
import { useStateContext } from "../../context/StateContext";

function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  console.log(click);
  return (
    <>
      <div className="nav-wrapper">
        <nav className="navbar-cont">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <GiWool />
            hms
          </Link>
          <div className="nav-right-wrapper">
            <div className="menu-icon-cont" onClick={handleClick}>
              <span className="menu-icon">
                <FiMenu className={click ? "icon-hide" : "icon-show"} />
              </span>
              <span className="menu-icon">
                <IoCloseOutline className={click ? "icon-show" : "icon-hide"} />
              </span>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/faqs"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  FAQ
                </NavLink>
              </li>
            </ul>

            <div className="cart-icon-cont">
              <button
                type="button"
                className="cart-icon"
                onClick={() => setShowCart(true)}
              >
                <AiOutlineShopping />
                <span className="cart-item-qty">{totalQuantities}</span>
              </button>
            </div>
          </div>
          {showCart && <Cart />}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
