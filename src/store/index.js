import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./AuthSlice"
import counterReducer from "./CounterSlice"


const store = configureStore({
    reducer:{counter:counterReducer, auth:authReducer}
});


export default store;

