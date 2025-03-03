// src/store/index.js
import { configureStore } from "@reduxjs/toolkit"
//import cartReducer from './cartSlice';
// import designReducer from './designSlice';
import userReducer from "./userSlice"

export const store = configureStore({
    reducer: {
        //cart: cartReducer,
        // design: designReducer,
        user: userReducer
    }
})
