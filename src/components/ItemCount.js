import React from 'react'
import { useState } from 'react';

export default function ItemCount({ stock, initial, }) {


    const [count, setCount] = useState(initial);

    const addOn = (count) => {
        count < stock ? setCount(count + 1) : console.log("no hay stock")
    }

    const mensaje = <></>;

    return (
        <div>
            <div className='cajaCarrito'>
                <div className="productslist">
                    <spam>Producto Elegido</spam>
                    <div className="cantProducto">
                        <button href="#" className="menos" onClick={() =>
                            count >= 1 ? setCount(count - 1) : console.log("0 producto")}>-</button>
                        <p>
                            {count}
                        </p>
                        <button href="#" className="mas" onClick={() => addOn(count)}>+</button>


                    </div>
                    <button>Agregar al carrito</button>




                    <span className='mensaje'>{mensaje}</span>
                </div>
            </div>

        </div >
    )
}
