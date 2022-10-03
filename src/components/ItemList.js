import React from "react";
import Item from "./Item";

export default function ItemList({ datos }) {
  return (
    <>
      <div className="ListofItems">
        {console.log(datos)}
        {datos && datos.map((item) => <Item key={item.id} product={item} />)}
      </div>
    </>
  );
}
