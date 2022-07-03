import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './redux/cartReducer'
import productReducer from './redux/productReducer'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products : productReducer,
    }
  })