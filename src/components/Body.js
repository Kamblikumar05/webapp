 
import {   createBrowserRouter, RouterProvider } from "react-router-dom";  
import Login from "./Login";
import BrouserComponent from "./BrouserComponent"; 
import Movieplaying from "./MoviePlaying";
import useNowPlayingMovie from "../uittls/useNowPlayingMovie";
import useTopRatedMovies from "../uittls/useTopRatedMovies";
import useUpComeingMovies from "../uittls/useUpcomeingMovies";
import usePopularMovies from "../uittls/usePopularMovies";
import useHeart from "../uittls/useHeart";



const Boby =( )=>{   
    useNowPlayingMovie(); 
    usePopularMovies();
    useTopRatedMovies();
    useUpComeingMovies();  


    const appRounrt = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        }, 
        {
            path:"/brouser",
            element:<BrouserComponent/>, 
        },
        {
            path:"/brouser/moviePlaying/:movieId",
            element:<Movieplaying/>
        }
    ] );
    
        
     
     
      

    return (
        <> 
        { <RouterProvider router={appRounrt}/>  }
        </>
    )
};
export default Boby;