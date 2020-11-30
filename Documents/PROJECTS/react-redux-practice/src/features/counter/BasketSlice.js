import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
  basket: [],
  },
  reducers: {
    AddtoBasket: ( state, action ) => {
      //logic to add item to basket
      state.basket = [...state.basket, action.payload]
    },
    //logic to remove an item from basket
    DeleteBasket: (state, action) => {
      //cloned basket
      let newBasket = [...state.basket];
      //check to see if product exists
      const index = state.basket.findIndex((basketItems) => basketItems.id === action.payload.id);
      // console.log('The index is: ', index);
      if (index >=0 ) {
        //item exists in basket, remove it... 
        newBasket.splice(index, 1);
        // console.log('item has been removed',newBasket);
      }
      else {
        console.warn('error occurred')
      }
      
      state.basket = newBasket;
    }
  }
});

export const { AddtoBasket, DeleteBasket } = basketSlice.actions;
export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount,0)

export const selectBasket = state => state.basket;

export default basketSlice.reducer;