import { useSelector } from "react-redux";
import MovieCards from "./MovieCards"; 
import { useParams } from "react-router-dom"; 
import { TMDB_IMG_PATH } from "../uittls/urls";

const Movieplaying =()=>{   

    const Movie = useSelector(store=> store.moive); 
    console.log(Movie);

    console.log(Movie.nowPlayingMovies?.results)

    const paramsMovieId = useParams("movieId");  

    

    
    
    if(!Movie ) return ; 
    const {backdrop_path,original_title,release_date,overview,vote_average} = Movie;

 
    return ( 
        <div className="absolute w-full bg-slate-950  h-auto " >   
            <div  > 
                <div className=" relative mx-14 my-20 bg-gradient-to-tr from-slate-500   h-[300px] w-[600px] rounded-lg ">
                <img className="img h-full w-full rounded-lg" alt = " " src={TMDB_IMG_PATH +  backdrop_path   } />   
                       </div>
                <div className="absolute border-2 rounded-lg cursor-pointer  border-stone-600 top-0 left-[50%]  h-[300px] mt-20 w-[45%]  tracking-normal leading-loose"> 
                    <div className="text-white text-[25px] font-bold p-2 px-4"> 
                        { original_title}
                    </div>
                    <div className="text-white font-semibold px-4">
                       Release Date: { release_date}
                    </div>
                    <div className="text-white  px-4 text-sm font-medium"> 
                        { overview} 
                    </div>
                    <div className="text-white font-semibold px-4"> 
                       Average Vote: <span className="font-medium">{vote_average}</span>  
                    </div>
                    <div>

                    </div>

                </div>
                 
            </div>
            {/* MoiveSuggestions */} 
            {/* <div className="relative flex overflow-x-auto text-white font-semibold  px-10 " > 
            {Movies?.results?.map((item) =>(<MovieCards key={item.id} cards={item} title={item?.original_title} release_date={item?.release_date} MoiveId={item.id}  /> ) )}
            </div> */}
        </div>  
    )
};

export default Movieplaying;