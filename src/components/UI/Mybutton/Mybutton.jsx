import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setItemInCart } from '../../../redux/cartReducer'
import { deleteItemFromCart } from '../../../redux/cartReducer.js'
import './mybutton.css'

export const Mybutton = ({ product }) => {
  const items = useSelector((state) => state.cart.itemsInCart)
  const isItemInCart = items.some((item) => item.id === product.id)
  const dispatch = useDispatch()
  const handleClick = (e) => {
    e.stopPropagation()
    if (isItemInCart) {
      dispatch(deleteItemFromCart(product.id))
    } else {
      dispatch(setItemInCart(product))
    }
  };

  return (
    <div>
      <button className={isItemInCart ? "incart" : "btn"}
        onClick={handleClick} >
        {isItemInCart ? "Убрать из корзины" : "В Корзину"}</button>
    </div>
  )
}
