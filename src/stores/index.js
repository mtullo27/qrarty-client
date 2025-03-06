// src/store/index.js
import { configureStore } from "@reduxjs/toolkit"
//import cartReducer from './cartSlice';
// import designReducer from './designSlice';
import userReducer from "./userSlice"
<<<<<<< HEAD
import qrReducer from "./qrSlice"
=======
>>>>>>> a0056e03328e60fdce257173d27306ba9a5c79e5

export const store = configureStore({
    reducer: {
        //cart: cartReducer,
        // design: designReducer,
<<<<<<< HEAD
        user: userReducer,
        qr: qrReducer
    }
})

export default store
=======
        user: userReducer
    }
})
>>>>>>> a0056e03328e60fdce257173d27306ba9a5c79e5
