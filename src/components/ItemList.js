import React from 'react'
import Item from './Item'


export default function ItemList({ datos }) {



    return (
        <>
            <div className='ListofItems'>
                {

                    datos.map(item => <li className="productItem" key={item.id}><h2>{item.name}</h2> <img src={item.pic} alt="imgprodcut"></img><span> Precio {item.price}</span> <Item /> </li>)

                }
            </div>
        </>
    )
}