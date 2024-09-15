 
import { useSelector } from "react-redux";
import { MOVIE_LIST } from "../uittls/urls";
import { useEffect } from "react";
import BackGroundVideo from "./BackGroundVideo";
import VideoTitle from "./VideoTitle";

const MeanContainer = () =>{
    const moviesData = useSelector(state=>state.moive.nowPlayingMovies?.results[3]);

    if(!moviesData) return ;

   

    return (
        <> 
        {/* Mean Container 
            -video beckground 
            -title
            -playbutton 
            -more Information  
        */}
        <div className="relative -top-[30px] meanContainer aspect-video"> 
            <VideoTitle moviesData={moviesData}/> 
            <BackGroundVideo  moviesData={moviesData}  /> 
        </div>
        </>
    )
};

export default MeanContainer;