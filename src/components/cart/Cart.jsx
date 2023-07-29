import React, { useRef } from "react";
import "./Cart.css";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { toast } from "react-hot-toast";

import { useStateContext } from "../../context/StateContext";
import { urlFor } from "../../library/client";
import { Link } from "react-router-dom";

function Cart() {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    onRemove,
    toggleCartItemQuantity,
  } = useStateContext();

  return (
    <>
      <div className="cart-wrapper" ref={cartRef}>
        <div className="cart-cont">
          <button
            type="button"
            className="cart-heading"
            onClick={() => setShowCart(false)}
          >
            <AiOutlineLeft />
            <span className="heading">Your Cart</span>
            <span className="cart-num-items">{`(${totalQuantities} items)`}</span>
          </button>

          {cartItems.length < 1 && (
            <div className="empty-cart">
              <AiOutlineShopping size={130} />
              <h3>Your shopping bag is empty.</h3>
              <Link to="/">
                <button type="button" onClick={() => setShowCart(false)}>
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}

          <div className="product-cont">
            {cartItems.length >= 1 &&
              cartItems.map((item, index) => (
                <div className="product" key={item.name}>
                  <img
                    src={urlFor(item?.image[0].url)}
                    alt={item.name}
                    className="cart-product-image"
                  />
                  <div className="item-desc">
                    <div className="flex top">
                      <h5>{item.name}</h5>
                      <h4>{item.price} €</h4>
                    </div>
                    <div className="flex bottom">
                      <div>
                        <p className="quantity-desc">
                          <span
                            className="minus"
                            onClick={() =>
                              toggleCartItemQuantity(item.slug, "decrement")
                            }
                          >
                            <AiOutlineMinus />
                          </span>
                          <span className="num">{item.quantity}</span>
                          <span
                            className="plus"
                            onClick={() =>
                              toggleCartItemQuantity(item.slug, "increment")
                            }
                          >
                            <AiOutlinePlus />
                          </span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="remove-item"
                        onClick={() => onRemove(item)}
                      >
                        <MdOutlineRemoveShoppingCart />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {cartItems.length >= 1 && (
            <div className="cart-bottom">
              <div className="total">
                <h3>Subtotal:</h3>
                <h3>{totalPrice} €</h3>
              </div>
              <div className="btn-cont">
                <button type="button">Check Out</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
