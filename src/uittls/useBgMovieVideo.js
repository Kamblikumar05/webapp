import { useEffect } from "react";
import { MOVIE_LIST } from "./urls";

const useBgMovieVideo = (id)=>{
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const MoiveData = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, MOVIE_LIST)
        const jsonMoiveData = await MoiveData.json(); 
        const bgvideo = jsonMoiveData.results.filter((trailer) => trailer.type === "Trailer") 
    };
    
};
export default useBgMovieVideo;