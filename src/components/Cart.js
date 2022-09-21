import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from "../components/Provider"

export default function Cart({ cantProducts }) {

    const { id } = useParams()
    const { cart, setCart } = useContext(AppContext)

    return (<>
        <div>Cart</div>
        <div>Productos comprados : {id}</div>
        {/* {cart} */}

        {console.log("recibidos" + id)}
    </>
    )
}
