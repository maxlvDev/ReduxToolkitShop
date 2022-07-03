import React from 'react'
import {Catalog} from '../../components/Catalog/Catalog'
import {Basket} from '../../components/Basket/Basket'
import './homepage.css'

export const Homepage = () => {
  return (
    <div className='homepage'>
    <Catalog/>
    <Basket/>
    </div>
  )
}
