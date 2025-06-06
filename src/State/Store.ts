// Configuración y hooks personalizados de Redux Store para la app.
// Importa funciones de @reduxjs/toolkit y react-redux.
// Combina reducers y configura el middleware thunk.
// Exporta tipos y hooks personalizados para el dispatch y el selector.

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { thunk } from "redux-thunk";
import sellerSlice from "./seller/sellerSlice";

const rootReducer = combineReducers({
  seller:sellerSlice
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware() //.concat(thunk)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;