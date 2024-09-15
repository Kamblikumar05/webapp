import { useSelector } from "react-redux";
import movieSlice from "../uittls/movieSlice";
import MovieCards from "./MovieCards";

const MoviePlayList = (props)=>{
     const {Heading,Movies} = props
    // console.log(moiveList);
    

    return (
        <>   
            <div>  
                <div className= "bg-neutral-950  relative -top-[20px]   ">  
                    <div className="relative z-30 -top-[300px] p-4"> 
                        <div className="relative z-50"> 
                        <h4 className=" text-white text-2xl   font-bold p-3 ">{Heading}</h4>  
                        <div className="flex relative overflow-x-auto overflow-hidden p-3" > 
                            {Movies?.results?.map((item,index) => (<MovieCards key={item.id} cards={item} title={item?.original_title} release_date={item?.release_date}/>) )}  </div>
                        </div>  
                    </div>  
                </div>
            </div>
        </>
    )
};
export default MoviePlayList;