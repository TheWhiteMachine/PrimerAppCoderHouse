import React from "react";
import Cart from "../components/Cart";
import CartProvider from "../components/cartContext";

import { ItemListContainer } from "../components/ItemListContainer";

const Home = () => {
  return (
    <div>
      <CartProvider>
        <ItemListContainer greetings="Mira que precios" />
        <h2>Elije detalles para saber mas de cada producto</h2>
        <Cart />
      </CartProvider>
    </div>
  );
};

export default Home;
