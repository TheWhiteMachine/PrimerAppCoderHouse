import React from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";

export default function ItemList({ datos }) {
  const { category } = useParams();

  const datosporcategoria =
    { category }.typeof !== undefined
      ? datos.filter((d) => d.category === { category })
      : datos;

  return (
    <>
      <div className="ListofItems">
        {datosporcategoria.map((item) => (
          <Item product={item} />
        ))}
      </div>
    </>
  );
}
