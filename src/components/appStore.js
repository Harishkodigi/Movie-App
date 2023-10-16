import { configureStore } from "@reduxjs/toolkit";
import useReducer from '../components/createSlice';

const appStore  = configureStore({
    reducer:{
        user:useReducer,
    }
});


export default appStore;