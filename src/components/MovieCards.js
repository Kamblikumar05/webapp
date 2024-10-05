import { useState } from "react";
import { TMDB_IMG_PATH } from "../uittls/urls";
import { Link  } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { FevariteMovies, RemoveHeart, setplayingMovie } from "../uittls/movieSlice";

const MovieCards = (props) => {
    const { cards, title, release_date, MoiveId  } = props;
    const [heart,setheart] = useState(false); 
    const dispatch = useDispatch();    

    const changeHeart=()=>{  
        setheart(!heart) ;
    };


    const addHeart=(cards)=>{ 
        dispatch(FevariteMovies(cards)); 

    };

    const removeHeart=(cards)=>{ 
        dispatch(RemoveHeart(cards));   
    }; 

    // const setMovie =(cards)=>{
    //     dispatch(setplayingMovie(cards));
    // }

    return ( 
        <div className="p-2 cursor-auto  ">  
         
            <div onClick={changeHeart}>   
                 <img className= { heart ?   "absolute w-6 h-6 m-2  " : "absolute w-6 h-6 m-2 invisible "} src="https://static.vecteezy.com/system/resources/previews/018/824/830/original/heart-emoji-file-free-png.png"  alt="poster" onClick={()=>removeHeart(cards)}/>   

                 <img className= { heart ?   "absolute w-6 h-6 m-2  invisible" : "absolute w-6 h-6 m-2  " } src="https://clipartmag.com/images/simple-heart-outline-13.png" alt="poster" onClick={()=>addHeart(cards)} />
                  
            </div>  
                  
             
            <Link to= {"/brouser/moviePlaying/"+ MoiveId}> 
            <div className="poster"> 
                <img  className={"  min-w-[150px] h-[225px] rounded-md  scroll-me-40 m-1  "} src= { TMDB_IMG_PATH + cards?.poster_path} alt="poster"/>
                <div className="p-2">  
                    <div className="font-semibold py-1 ">{title}</div> 
                    <div className="font-light">{release_date}</div>
                    <div className=  " text-black   hover:text-white  " >{MoiveId}</div>
                </div>
            </div>
            </Link>
        </div>
        );
        
};


export default MovieCards;