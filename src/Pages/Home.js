import React from "react";
import { ItemListContainer } from "../components/ItemListContainer";

export default function Home() {
  return (
    <div>
      <ItemListContainer greetings="Mira que precios" />
      <h2>Elije detalles para saber mas de cada producto</h2>
    </div>
  );
}
