import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../Utils/Products"



export const ItemListContainer = ({ greetings }) => {

  const { id } = useParams();
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    id ?
      getProducts.then(data => setDatos(data.filter(item => item.category === id)))
      :
      getProducts.then(data => setDatos(data))
  }, [id]);
  console.log(id)

  return (
    <div>
      {greetings}
      <ItemList datos={datos} />
    </div>
  );
};
