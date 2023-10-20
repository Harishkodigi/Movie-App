import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice ({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVedio:null,
    },
    reducers:{
        addNowplayingMovies:(state,action) => {
            state.nowPlayingMovies  = action.payload;
        },
        addTrailerVedio:(state,action) => {
           state.trailerVedio = action.payload;
        }
    }
});


export const {addNowplayingMovies,addTrailerVedio} = moviesSlice.actions;

export default moviesSlice.reducer;