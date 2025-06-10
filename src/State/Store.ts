import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { thunk } from "redux-thunk";
import sellerSlice from "./seller/sellerSlice";
import sellerProductSlice from "./seller/sellerProductSlice";
import productSlice from"./customer/ProductSlice";
import transactionSlice from "./seller/transactionSlice"
import sellerOrderSlice from "./seller/sellerOrderSlice"
import wishlistSlice from "./customer/wishlistSlice"
import authSlice from "./AuthSlice"
import cartSlice from "./customer/cartSlice"
import OrderSlice from "./customer/orderSlice"
import CouponSlice from "./customer/couponSlice"



// Configuración principal de Redux Store.
// Define rootReducer y aplica middleware thunk.
// Exporta hooks personalizados para usar el store en la app.

const rootReducer = combineReducers({
  // customer
  product: productSlice,
  auth: authSlice,
  wishlist: wishlistSlice,
  cart: cartSlice,
  orders: OrderSlice,
  coupone: CouponSlice,


  // seller
  transactions:transactionSlice,
  seller: sellerSlice,
  sellerOrder: sellerOrderSlice,
  sellerProduct: sellerProductSlice,
  
  
  
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware() //.concat(thunk)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

// Hook tipado para despachar acciones en toda la app
export const useAppDispatch = () => useDispatch<AppDispatch>();
// Hook tipado para seleccionar estado desde el store
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;