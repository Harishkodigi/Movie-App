import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice ({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVedio:null,
        popularVedios:null
    },
    reducers:{
        addNowplayingMovies:(state,action) => {
            state.nowPlayingMovies  = action.payload;
        },
        addTrailerVedio:(state,action) => {
           state.trailerVedio = action.payload;
        },
        addPopularMovies:(state,action) => {
            state.popularVedios = action.payload;
         }
    }
});


export const {addNowplayingMovies,addTrailerVedio,addPopularMovies} = moviesSlice.actions;

export default moviesSlice.reducer;