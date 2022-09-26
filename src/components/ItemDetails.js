import React from "react";
import ItemCount from "./ItemCount";
import { cartContext, useCartContext } from "./cartContext";


export const ItemDetails = ({ product }) => {
  const { cart, addToCart } = useCartContext([]);

  const onAdd = (quantity) => {
    addToCart(product, quantity)
  };

  return (
    <>
      <div className="detailsComponent">
        <li className="productItemdetails" key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.pic} alt="img"></img>
          <br></br>

          <b>
            <span> Precio $ {product.price}</span>
          </b>
          <p> {product.description}</p>
        </li>
      </div>

      <ItemCount stock={4} initial={0} onAdd={onAdd} />
    </>
  );
};
