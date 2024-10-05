import { useEffect } from "react";
import { MOVIE_LIST, PopularMovies } from "./urls";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMoive, palyingMovieSuggection } from "./movieSlice";

const usePopularMovies=()=>{
    const dispatch = useDispatch()
    const MovieData = useSelector(store=>store.moive.popularMovie)
    useEffect(()=>{
        !MovieData &&  getPopularMovies();
    },[ ]);

    const getPopularMovies= async ()=>{
        const getData = await fetch(PopularMovies, MOVIE_LIST );  
        const jsongetData = await getData.json(); 
        dispatch(addPopularMoive(jsongetData)); 

    }
    
};
export default usePopularMovies;