import React from "react";
import ItemCount from "./ItemCount";
import { useCartContext } from "./cartContext";


export const ItemDetails = ({ product }) => {
  const { cart, addToCart, totalQty, totalPrice, } = useCartContext();



  return (
    <>
      <div className="detailsComponent">
        <li className="productItemdetails" key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.pic} alt="img"></img>
          <br></br>

          <b>
            <span> Precio $ {product.price}</span>
          </b>
          <p> {product.description}</p>
        </li>
      </div>

      <ItemCount stock={4} initial={0} onAdd={(qty) => addToCart(product, qty, totalQty, totalPrice)} />
    </>
  );
};
