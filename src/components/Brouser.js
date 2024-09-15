 
import useNowPlayingMovie from "../uittls/useNowPlayingMovie";
import usePopularMovies from "../uittls/usePopularMovies";
import useTopRatedMovies from "../uittls/useTopRatedMovies";
import useUpComeingMovies from "../uittls/useUpcomeingMovies";
import MeanContainer from "./MeanContainer";
import SecoundaryContainer from "./SecoundaryCOntainer";


const Brouser =()=>{  
    useNowPlayingMovie(); 
    usePopularMovies();
    useTopRatedMovies();
    useUpComeingMovies();
     
    return (  
        <> 
        <MeanContainer/> 
        <SecoundaryContainer/> 
        {/* {
        Mean Container  
        Secoundary container
        RECOMENDED MOVIES *N
            - MOVIES * N
        }  */}  
        </>
    )
};
export default Brouser;