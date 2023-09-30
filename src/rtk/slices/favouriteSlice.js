import { createSlice } from '@reduxjs/toolkit'



export const cartReducer = createSlice({
  name: 'favo',
  initialState : {
  cart: [],
  },
  reducers: {
    addToFavourite: (state , action) => {
        state.cart.push(action.payload);
    },
    remove : (state , action) => {
        state.cart = state.cart.filter((x) => x.id !== action.payload.id)
    },

  },
})

export const { addToFavourite, remove } = cartReducer.actions;

export default cartReducer.reducer;