import React from "react";
import CartProvider from "../components/CartContext";

import { ItemListContainer } from "../components/ItemListContainer";

const Home = () => {
  return (
    <div>
      <CartProvider>
        <ItemListContainer greetings="Mira que precios" />
        <h2>Elije detalles para saber mas de cada producto</h2>
        {cart &&
          cart.map((producto, i) => (
            <p key={i}>
              {cart.name},{cart.price}
            </p>
          ))}
      </CartProvider>
    </div>
  );
};

export default Home;
