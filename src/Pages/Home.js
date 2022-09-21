import React from "react";
import { ItemListContainer } from "../components/ItemListContainer";
import Provider from "../components/Provider"
import { AppContext } from "../components/Provider"
import { useState } from "react";
import { useContext } from "react";

const Home = () => {

  const { cart, setCart, addToCart } = useContext(AppContext)

  return (
    <div>
      <Provider value={{ cart, addToCart, setCart }}>

        <ItemListContainer greetings="Mira que precios" />
        <h2>Elije detalles para saber mas de cada producto</h2>
        {
          cart && cart.map((producto, i) => (
            <p key={i}>{cart.name},{cart.price}</p>
          ))

        }
      </Provider>
    </div >
  );
}

export default Home;