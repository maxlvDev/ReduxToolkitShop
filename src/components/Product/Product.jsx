import './product.css'
import { Mybutton } from '../UI/Mybutton/Mybutton'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { setCurrent } from '../../redux/productReducer.js'

export const Product = ({ product }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () => {
      dispatch(setCurrent(product))
      navigate(`/app/${product.name}`)
  }

  return (
    <div className='product'>
      <img src={product.image} />
      <div className='product_name'>{product.name}</div>
      <div className='product_price'>{product.price} ₽</div>
      <Mybutton product = {product} ></Mybutton>
      <button onClick={handleClick} className='details'>Описание</button>
    </div>
  )
}
