import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'products',
  initialState: {
    currentProduct: null
  },
  reducers: {
    setCurrent: (state, action) => {
      state.currentProduct = action.payload
    },
  }
})

export const { setCurrent } = productSlice.actions
export default productSlice.reducer