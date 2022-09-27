import React from "react";
import { useCartContext } from "./cartContext";

export default function Cart() {
  const { cart, removeItem, emptyCart, totalQty, totalPrice } = useCartContext();

  console.log("precio total llega?  ", totalPrice)


  const deleteFromCart = (id) => {
    removeItem(id);
  };

  const deleteCart = () => {
    emptyCart();
  };

  return (
    <div className="Cart">
      <p>Carrito de compra</p>
      {cart &&
        cart.length > 0 ? (
        <>
          <ul>
            {cart.map((item, index) => {
              return (
                <li key={index}>
                  <p>{item.quantity} - {item.name} -- </p>
                  <p>$ - {item.quantity * item.price} -- </p>
                  <button onClick={() => deleteFromCart(item)}>
                    Eliminar
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>Np hay productos en tu carrito</p>
      )}
      <p>{totalQty} Productos en tu Carrito</p>
      <b>Total : {totalPrice} </b>

      <button onClick={() => deleteCart()}>Vaciar carrito</button>
    </div>
  );
};


