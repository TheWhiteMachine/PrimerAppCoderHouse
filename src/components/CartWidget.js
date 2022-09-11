import React from 'react'

export const CartWidget = ({ cantProducts }) => {
    return (
        <div className='cartWidget'>
            <span className="material-symbols-outlined">
                shopping_cart
            </span>
            <span>{cantProducts}</span>
        </div>
    )
}

