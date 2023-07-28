import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [quantity, setQuantity] = useState(1);

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

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        quantity,
        increaseQuantity,
        decreaseQuantity,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
