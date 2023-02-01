import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import cartRedux from './cartRedux';
import userRedux from './userRedux';
import { combineReducers } from 'redux';
import {persistReducer,FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
const persistConfig = {
    key: "ecommerce",
    version: 1,
    storage,

}
const rootReducer = combineReducers({ user: userRedux, cart:cartRedux });

const persistReduce = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistReduce,
    serializableCheck: {
        ignoredActions: [FLUSH, REGISTER, REHYDRATE, PURGE, PERSIST, PAUSE]
    }
});

export const persistStor = persistStore(store)