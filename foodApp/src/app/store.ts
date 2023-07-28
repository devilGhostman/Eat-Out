import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from 'redux-persist/lib/storage';

import cartReducer from "./slices/cart"
import userReducer from "./slices/user"
import favouriteReducer from "./slices/favourite"

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
    cart:cartReducer,
    user:userReducer,
    favourite:favouriteReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

// export const store = configureStore({
//   reducer: {
//     cart:cartReducer,
//     user:userReducer
//   },
// })


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch