import { createSlice } from "@reduxjs/toolkit"; 



const movieSlice  = createSlice({
    name:'moive',
    initialState:{
        nowPlayingMovies:null,
        popularMovie:null,
        topRatedMovie:null,
        upComeingMovie:null,
    },
    reducers:{
        addNowPlayingMoive:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMoive:(state,action)=>{
            state.popularMovie = action.payload; 
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovie = action.payload;
        },
        addUpComeingMovies:(state,action)=>{
            state.upComeingMovie = action.payload
        }
    }
});

export const  {addNowPlayingMoive,addPopularMoive,addTopRatedMovies,addUpComeingMovies} = movieSlice.actions;
export default movieSlice.reducer;