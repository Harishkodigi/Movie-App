import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice ({
    name:"movies",
    intialState:{
        nowPlayingMovies:null,
    },
    reducers:{
        addNowplayingMovies:(state,actions) => {
            state.nowPlayingMovies  = actions.payload;
        }
    }
});


export const {addNowplayingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;