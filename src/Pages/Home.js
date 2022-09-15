import React from "react";
import { ItemListContainer } from "../components/ItemListContainer";
import Provider from "../components/Provider"
import { AppContext } from "../components/Provider"
import { useState } from "react";
import { useContext } from "react";

const Home = () => {

  const { state, setState } = useContext(AppContext)

  return (
    <div>
      <ItemListContainer greetings="Mira que precios" />
      <h2>Elije detalles para saber mas de cada producto</h2>
      {
        state && state.map((producto, i) => (
          <p key={i}>{state.title},{state.price}</p>
        ))

      }
    </div>
  );
}

export default Home;