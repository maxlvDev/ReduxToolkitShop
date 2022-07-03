import React from 'react'
import './cartitem.css'

export const CartItem = ({name, image, price}) => {
    return (
        <div className='cartitem'>
           <span>{name}</span>
           <img src={image} />
            <div className='product_price'>{price} ₽</div>
        </div>
    )
}
