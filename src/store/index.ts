import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user.slice';
import productReducer from './products/product.slice';
import cartReducer from './cart/cart.slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

//RootState와 AppDispatch의 타입을 지정해준다.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
