import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/users/userSlice";
import storage from "redux-persist/lib/storage" ;
import {persistReducer} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import AlertModalSlice from "./features/AlertModal/AlertModalSlice";
import categorySlice from "./features/category/categorySlice";
import productSlice from "./features/Products/productSlice";


const persistConfig = {
    key : "root" ,
    version : 1 ,
    storage
}

const reducer = combineReducers({
    user : userSlice ,
    alert : AlertModalSlice,
    category : categorySlice,
    products : productSlice,
    
})

const persistedReducer = persistReducer(persistConfig,reducer)

export const store = configureStore({
    reducer : persistedReducer ,
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck : {
                ignoredActions : [FLUSH , REHYDRATE , PAUSE ,PERSIST,PURGE,REGISTER]
            }
        })
});