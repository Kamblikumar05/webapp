import { createSlice } from "@reduxjs/toolkit"; 



const movieSlice  = createSlice({
    name:'moive',
    initialState:{
        nowPlayingMovies:null,
        popularMovie:null,
        topRatedMovie:null,
        upComeingMovie:null,
        heart:[], 
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
        },
        FevariteMovies:(state,action)=>{
            const movie = action.payload;
            if(state.heart === undefined) return 
            const filterMovie = state.heart.findIndex(movieId=> movieId?.id === movie?.id );  
            if(filterMovie < 0 ){
                state.heart.push(movie);
            } 
        },
        RemoveHeart:(state,action)=>{
            const Remove = action.payload
            const filterMovie  = state.heart.filter(MovieId=> MovieId.id !== Remove.id);
            state.heart = filterMovie;
        },  
    }
});

export const  {addNowPlayingMoive,addPopularMoive,addTopRatedMovies,addUpComeingMovies,FevariteMovies,RemoveHeart,setplayingMovie,palyingMovieSuggection } = movieSlice.actions;
export default movieSlice.reducer;