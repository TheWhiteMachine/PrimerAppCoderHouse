import React from "react";
import { useCartContext } from "./cartContext";

const Cart = () => {
  const { cart, removeItem, emptyCart } = useCartContext();

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
                  <p>{item.name}</p>
                  <p>{item.quantity}</p>
                  <p>{item.quantity * item.price}</p>
                  <button onClick={() => deleteFromCart(item)}>
                    Eliminar del carrito
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>Np hay productos en tu carrito</p>
      )}
      <button onClick={() => deleteCart()}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
