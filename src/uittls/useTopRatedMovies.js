import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_LIST, TopRatedMovies } from "./urls";
import { addTopRatedMovies, palyingMovieSuggection } from "./movieSlice";

const useTopRatedMovies=()=>{
    const dispatch = useDispatch();
    const MovieData = useSelector(store=>store.moive.topRatedMovie)

    useEffect(()=>{
        !MovieData && getTopRatedMovies();
    },[ ]);

    const getTopRatedMovies= async ()=>{
        const getData = await fetch( TopRatedMovies,MOVIE_LIST);
        const jsongetData = await getData.json();
        dispatch(addTopRatedMovies(jsongetData)); 
        

    }




};
export default useTopRatedMovies;