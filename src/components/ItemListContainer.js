import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../Utils/Products";

export const ItemListContainer = ({ greetings }) => {
  const { id } = useParams();
  const [datos, setDatos] = useState();

  useEffect(() => {
    getDatos();
  }, []);

  const getDatos = async () => {
    const p = await getProducts();
    console.log("p ", p);
    const datafetch = p.docs.map((pr) => pr.data());
    id ? setDatos(datafetch.map((i) => i.id == id)) : setDatos(datafetch);
  };

  return (
    <div>
      {greetings}
      <ItemList datos={datos} />
    </div>
  );
};
