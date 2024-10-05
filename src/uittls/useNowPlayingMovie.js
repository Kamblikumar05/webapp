import { useEffect } from "react";
import { MOVIE_LIST, NowPlayingMovies  } from "./urls";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMoive, palyingMovieSuggection } from "./movieSlice" 
 
const useNowPlayingMovie =()=>{
    const dispatch = useDispatch();
    const MovieData = useSelector(store=>store.moive.nowPlayingMovies)

     useEffect(()=>{ 

        !MovieData && fetchMoviesdata() 
     },[ ]);

    const fetchMoviesdata = async () => {
        const moviesData = await fetch(NowPlayingMovies, MOVIE_LIST);  
        const jsonMovieData = await moviesData.json(); 
        dispatch(addNowPlayingMoive(jsonMovieData)); 


    };
     
};

export default useNowPlayingMovie;