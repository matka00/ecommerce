import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [quantity, setQuantity] = useState(1);

  let foundProduct;
  let index;

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity - 1 < 1) {
        return 1;
      } else {
        return prevQuantity - 1;
      }
    });
  };

  const onAdd = (chosenProduct, chosenQuantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item.slug === chosenProduct.slug
    );

    setTotalPrice(
      (previousPrice) => previousPrice + chosenProduct.price * quantity
    );
    setTotalQuantities(
      (previousTotalQuantities) => previousTotalQuantities + chosenQuantity
    );

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.slug === chosenProduct.slug) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + chosenQuantity,
          };
        }
      });

      setCartItems(updatedCartItems);
    } else {
      chosenProduct.quantity = chosenQuantity;

      setCartItems([...cartItems, { ...chosenProduct }]);
    }
    toast.success(`${quantity} ${chosenProduct.name} added to the cart.`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.slug === product.slug);

    const newCartItems = cartItems.filter((item) => item.slug !== product.slug);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuantity = (slug, value) => {
    foundProduct = cartItems.find((item) => item.slug === slug);
    index = cartItems.findIndex((product) => product.slug === slug);

    const newCartItems = cartItems.filter((item) => item.slug !== slug);

    if (value === "increment") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "decrement") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        quantity,
        increaseQuantity,
        decreaseQuantity,
        onAdd,
        onRemove,
        toggleCartItemQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
