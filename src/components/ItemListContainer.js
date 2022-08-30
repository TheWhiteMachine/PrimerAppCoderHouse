import React from 'react'
import ItemCount from './ItemCount'
export const ItemListContainer = ({ greetings }) => {
    return (
        <div>
            {greetings}

            <ItemCount stock={5} initial={1} />
        </div>
    )
}
