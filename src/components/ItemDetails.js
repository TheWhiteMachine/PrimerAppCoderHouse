import React from "react";
import ItemCount from "./ItemCount";
import { useCartContext } from "./CartContext";
import { useContext } from "react";

export const ItemDetails = ({ product }) => {
  const { cart, addToCart } = useContext();

  const onAdd = (quanity) => {
    addToCart(product, quanity);
  };
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

      <ItemCount stock={4} initial={0} onAdd={onAdd} />
    </>
  );
};
