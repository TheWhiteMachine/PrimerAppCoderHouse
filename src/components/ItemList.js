import React from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";

export default function ItemList({ datos }) {
  const { id } = useParams();

  const datosporcategoria =
    { id }.typeof !== undefined
      ? datos.filter((d) => d.id == id)
      : datos;

  return (
    <>
      <div className="ListofItems">
        {datosporcategoria.map((item) => (
          <Item key={item.id} product={item} />
        ))}
      </div>
    </>
  );
}
