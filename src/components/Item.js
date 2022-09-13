import * as React from "react";

export default function Item({ product }) {
  return (
    <div className="item">
      <li className="productItem" key={product.id}>
        <h2>{product.name}</h2>
        <img src={product.pic} alt="img"></img>
        <span> Precio {product.price}</span>

        <button>Detalles</button>
      </li>
    </div>
  );
}
