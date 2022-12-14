import React from "react";

export default function ItemDetails({ product }) {
  return (
    <>
      <div className="detailsComponent">
        <li className="productItemdetails" key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.pic} alt="img"></img>
          <br></br>

          <b>
            <span> Precio {product.price}</span>
          </b>
          <p> {product.description}</p>
        </li>
      </div>
    </>
  );
}
