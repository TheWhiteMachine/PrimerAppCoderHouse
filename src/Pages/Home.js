import React from "react";
import Cart from "../components/Cart";
import CartProvider from "../components/cartContext";
import { cartContext } from "../components/cartContext";
import { ItemListContainer } from "../components/ItemListContainer";

const Home = () => {
  return (
    <div>


      <ItemListContainer greetings="Mira que precios" />
      <h2>Elije detalles para saber mas de cada producto</h2>
      <Cart />


    </div>
  );
};

export default Home;
