import { createContext, useState, useContext } from "react";
import React from "react";

export const cartContext = createContext();

export const { Provider } = cartContext;

export const useCartContext = () => useContext(cartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product, quantity) => {
    console.log(product);
    setTotalQty(totalQty + quantity);
    setTotalPrice(totalPrice + product.price * quantity);
    if (isInCart(product.id)) {
      const newCart = cart.map((item) => {
        if (item.id == product.id) {
          return { ...item, quantity: item.quantity + quantity };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: quantity }]);
    }
  };

  const isInCart = (id) => {
    return cart.find((product) => product.id === id);
  };

  const removeItem = (item) => {
    setTotalPrice(totalPrice - item.quantity * item.price);
    setTotalQty(totalQty - item.quantity);
    const newCart = cart.filter((product) => product.id !== item.id);
    setCart(newCart);
  };

  const emptyCart = () => {
    setTotalPrice(0);
    setTotalQty(0);
    setCart([]);
  };

  const contextValue = {
    cart,
    addToCart,
    totalQty,
    totalPrice,
    removeItem,
    emptyCart,
  };

  return <Provider value={{ contextValue }}>{children}</Provider>;
};
export default CartProvider;
