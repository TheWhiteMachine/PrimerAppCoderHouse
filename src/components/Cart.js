import React from 'react'
import { useParams } from 'react-router-dom'

export default function Cart({ cantProducts }) {

    const { id } = useParams()

    return (<>
        <div>Cart</div>
        <div>Productos comprados : {id}</div>
        {console.log("recibidos" + id)}
    </>
    )
}
