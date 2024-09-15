import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MOVIE_LIST, TopRatedMovies } from "./urls";
import { addTopRatedMovies } from "./movieSlice";

const useTopRatedMovies=()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        getTopRatedMovies();
    },[ ]);

    const getTopRatedMovies= async ()=>{
        const getData = await fetch( TopRatedMovies,MOVIE_LIST);
        const jsongetData = await getData.json();
        dispatch(addTopRatedMovies(jsongetData));

    }




};
export default useTopRatedMovies;