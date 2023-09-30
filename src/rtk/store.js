import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/favouriteSlice'

export const store = configureStore({
  reducer: {
    fav :  cartReducer
  },
})
