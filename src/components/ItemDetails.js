import React from 'react'

export default function ItemDetails({ item }) {
    return (
        <>
            <div className='detailsComponent'>
                {

                    item.map(item => <li className="detailsItem" key={item.id}><h2>{item.name}</h2> <img src={item.pic} alt="img"></img><span> Precio {item.price}</span> <p> <b>Descripcion:</b>   {item.description}</p> </li>)

                }
            </div>
        </>
    )
}
