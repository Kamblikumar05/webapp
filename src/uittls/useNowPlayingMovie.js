import { useEffect } from "react";
import { MOVIE_LIST, NowPlayingMovies  } from "./urls";
import { useDispatch } from "react-redux";
import { addNowPlayingMoive } from "./movieSlice"
 
const useNowPlayingMovie =()=>{
    const dispatch = useDispatch();

     useEffect(()=>{ 
        fetchMoviesdata() 
     },[ ]);

    const fetchMoviesdata = async () => {
        const moviesData = await fetch(NowPlayingMovies, MOVIE_LIST);  
        const jsonMovieData = await moviesData.json(); 
        dispatch(addNowPlayingMoive(jsonMovieData)) 
    

    };
     
};

export default useNowPlayingMovie;