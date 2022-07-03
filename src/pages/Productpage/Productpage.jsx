import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './productpage.css'

export const Productpage = () => {
  const product = useSelector(state => state.products.currentProduct);
  const navigate = useNavigate();
  const back = () => {
   navigate('/')
  }

  return (
    <div className='productpage'>
      {product.name}
      <div>
      <img style={{marginTop : '10px'}} width={'500px'} height={'400px'} src={product.image}></img>
      </div>
      <div style={{padding : ' 50px 0px'}}>
      {product.desc}
      </div>
      <button className='back' onClick={back} > В каталог </button>
    </div>
  )
}
