import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from "react";
import { AppContext } from "./Provider";
import Cart from './Cart';

export default function ItemCount({ stock, initial, item }) {


    const [count, setCount] = useState(initial);
    const [mensaje, setMensaje] = useState(<></>);
    const [prodShoped, setProdShoped] = useState(0)
    const { addToCart } = useContext(AppContext)


    const add = (count) => {
        setMensaje(() => { return (<></>) })
        count < stock ? setCount(count + 1) : setMensaje(() => {
            return (<p style={{ color: "red" }}> Stock alcanzado</p >)
        })
    }

    const rest = (count) => {
        setMensaje(() => { return (<></>) })
        count > 0 ? setCount(count - 1) : setMensaje(() => { return (<p style={{ color: "red" }}>Sin productos </p>) })
    }


    useEffect(() => {
        setProdShoped(count);
    }, [count])


    const onAdd = (quantityOnAdd) => {
        console.log("Comprados :" + quantityOnAdd);
        // addToCart(item)
    }



    return (
        <div>
            <div className='cajaCarrito'>
                <div className="productslist">
                    <span>Producto Elegido</span>
                    <div className="cantProducto">
                        <button href="#" className="menos" onClick={() => rest(count)}
                        >-</button>
                        <p>
                            {count}
                        </p>
                        <button href="#" className="mas" onClick={() => add(count)}>+</button>


                    </div>
                    <button onClick={onAdd(count)}>Agregar al carrito</button>
                    <Link to={`/cart/${prodShoped}/`}>
                        <button>Finalizar Compra</button>
                    </Link>


                </div>



                <p>{mensaje}</p>
            </div>

        </div >
    )
}
