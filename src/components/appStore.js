import { configureStore } from "@reduxjs/toolkit";
import useReducer from '../components/createSlice';
import moviesReducer from '../components/moviesSlice';

const appStore  = configureStore({
    reducer:{
        user:useReducer,
        movies:moviesReducer,
    }
});


export default appStore;