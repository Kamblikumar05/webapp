import { useEffect } from "react";
import { MOVIE_LIST, PopularMovies } from "./urls";
import { useDispatch } from "react-redux";
import { addPopularMoive } from "./movieSlice";

const usePopularMovies=()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        getPopularMovies();
    },[ ]);

    const getPopularMovies= async ()=>{
        const getData = await fetch(PopularMovies, MOVIE_LIST );  
        const jsongetData = await getData.json(); 
        dispatch(addPopularMoive(jsongetData))

    }
    
};
export default usePopularMovies;