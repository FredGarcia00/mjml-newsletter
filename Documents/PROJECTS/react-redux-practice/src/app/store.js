import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../features/counter/BasketSlice';
import userReducer from '../features/counter/UserSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    basket: basketReducer
  },
});
