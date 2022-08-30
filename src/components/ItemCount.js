import React from 'react'
import { useState } from 'react';

export default function ItemCount({ stock, initial }) {


    const [count, setCount] = useState(initial);
    const [mensaje, setMensaje] = useState(<></>);

    const addOn = (count) => {
        setMensaje(() => { return (<></>) })
        count < stock ? setCount(count + 1) : setMensaje(() => {
            return (<p style={{ color: "red" }}> Stock alcanzado</p >)
        })
    }

    const restOn = (count) => {
        setMensaje(() => { return (<></>) })
        count > 0 ? setCount(count - 1) : setMensaje(() => { return (<p style={{ color: "red" }}>Sin productos </p>) })
    }




    return (
        <div>
            <div className='cajaCarrito'>
                <div className="productslist">
                    <span>Producto Elegido</span>
                    <div className="cantProducto">
                        <button href="#" className="menos" onClick={() => restOn(count)}
                        >-</button>
                        <p>
                            {count}
                        </p>
                        <button href="#" className="mas" onClick={() => addOn(count)}>+</button>


                    </div>
                    <button>Agregar al carrito</button>


                </div>



                <p>{mensaje}</p>
            </div>

        </div >
    )
}
