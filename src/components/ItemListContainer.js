import React from 'react'
import { useState, useEffect } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const productosList = [
    { id: 1, name: "Iphone", price: 500, pic: "/public/images/iphone.jpg", description: 'Lorem ipsum dolor sit amet. Nam aliquid aperiam ex culpa quaerat sit labore galisum qui ratione voluptas ea adipisci voluptatum 33 quasi quam.' },
    { id: 2, name: "Earpods", price: 40, pic: "/public/images/earpods.webp", description: 'Lorem ipsum dolor sit amet. Nam aliquid aperiam ex culpa quaerat sit labore galisum qui ratione voluptas ea adipisci voluptatum 33 quasi quam.' },
    { id: 3, name: "Cargador", price: 20, pic: "/public/images/cargador.jpeg", description: 'Lorem ipsum dolor sit amet. Nam aliquid aperiam ex culpa quaerat sit labore galisum qui ratione voluptas ea adipisci voluptatum 33 quasi quam.' },
    { id: 4, name: "Monitor", price: 120, pic: "/public/images/monitor.webp", description: 'Lorem ipsum dolor sit amet. Nam aliquid aperiam ex culpa quaerat sit labore galisum qui ratione voluptas ea adipisci voluptatum 33 quasi quam.' },
    { id: 5, name: "Teclado", price: 35, pic: "/public/images/teclado.jpg", description: 'Lorem ipsum dolor sit amet. Nam aliquid aperiam ex culpa quaerat sit labore galisum qui ratione voluptas ea adipisci voluptatum 33 quasi quam.' }
]

export const ItemListContainer = ({ greetings }) => {

    const [datos, setDatos] = useState([]);
    const task = new Promise((resolve, reject) => (
        setTimeout(() => {
            resolve(console.log('promesa resuelta'))
        }, 200)
    ))
    useEffect(() => {
        task.then(setDatos(productosList))
    }, [])

    return (
        <div>
            {greetings}

            <ItemCount stock={5} initial={1} />
            <ItemList datos={datos} />
        </div>
    )
}
