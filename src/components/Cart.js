import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../App/firebaseConfig";
import { useState } from "react";
import { useCartContext } from "./cartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeItem, emptyCart, totalQty, totalPrice } = useCartContext();
  const [user, setUser] = useState({
    nombre: '',
    telefono: null,
    email: ''
  });

  const date = new Date();


  console.log("precio total llega?  ", totalPrice)


  const deleteFromCart = (id) => {
    removeItem(id);
  };

  const deleteCart = () => {
    emptyCart();
  };

  const handleOrder = async (e) => {
    e && e.preventDefault();
    await addDoc(collection(db, 'Orders'), { user, cart, date, totalPrice })

  }

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
                  <p>{item.quantity} - {item.title} -- </p>
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



      <form className="shopForm" onSubmit={handleOrder}>
        <label>Nombre</label>
        <input type="text" value={user.nombre} onChange={(e) => setUser({ ...user, nombre: e.target.value })} />
        <label>Telefono</label>
        <input type="nunber" value={user.telefono} onChange={(e) => setUser({ ...user, telefono: e.target.value })} />
        <label>Email</label>
        <input type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />

        <button onClick={() => handleOrder()}> <Link to="/gracias/">REALIZAR COMPRA </Link></button>

      </form>
    </div>
  );
};


