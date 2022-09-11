import React from 'react'
import Item from './Item'


export default function ItemList({ datos }) {



    return (
        <>
            <div className='ListofItems'>
                {

                    datos.map(item => <Item product={item} />)

                }
            </div>
        </>
    )
}