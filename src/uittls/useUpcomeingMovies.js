import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MOVIE_LIST, UpcomingMovies } from "./urls";
import { addUpComeingMovies } from "./movieSlice";

const useUpComeingMovies =()=>{
    const dispatch = useDispatch();

     useEffect(()=>{ 
        fetchMoviesdata() 
     },[ ]);

    const fetchMoviesdata = async () => {
        const moviesData = await fetch(UpcomingMovies, MOVIE_LIST);  
        const jsonMovieData = await moviesData.json(); 
        dispatch(addUpComeingMovies(jsonMovieData)) 
    

    };
     
};

export default useUpComeingMovies;