import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/app/store/features/cart"; 

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
