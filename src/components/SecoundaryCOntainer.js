 
import { useSelector } from "react-redux";
import MoviePlayList from "./MoviePlayList";

const SecoundaryContainer =()=>{
    const NowPlayingMovies = useSelector(state=>state?.moive?.nowPlayingMovies);
    const PopularMovies = useSelector(state=>state?.moive?.popularMovie);
    const TopRatedMovies = useSelector(state=>state?.moive?.topRatedMovie);
    const UpComingMovies = useSelector(state=>state?.moive?.upComeingMovie)
    console.log(UpComingMovies)
     
    return (

        <>
             <div className="text-white z-50 relative">
                <MoviePlayList Heading={"Now Playing Movies"} Movies={NowPlayingMovies} />
                <MoviePlayList Heading={"Popular Movies"} Movies={PopularMovies}  />
                <MoviePlayList Heading={"Top Rated Movies"} Movies={TopRatedMovies} />
                <MoviePlayList Heading={"UpComing Movies"} Movies={UpComingMovies}/>
                <MoviePlayList/>
                <MoviePlayList/>
             </div>
        </>
    )
};
export default SecoundaryContainer;