import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_LIST, UpcomingMovies } from "./urls";
import { addUpComeingMovies, palyingMovieSuggection } from "./movieSlice";

const useUpComeingMovies =()=>{
    const dispatch = useDispatch();
    const MovieData = useSelector(store=>store.moive.upComeingMovie)

     useEffect(()=>{ 
        !MovieData && fetchMoviesdata() 
     },[ ]);

    const fetchMoviesdata = async () => {
        const moviesData = await fetch(UpcomingMovies, MOVIE_LIST);  
        const jsonMovieData = await moviesData.json(); 
        dispatch(addUpComeingMovies(jsonMovieData)) ;
    

    };
     
};

export default useUpComeingMovies;