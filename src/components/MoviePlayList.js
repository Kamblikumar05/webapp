 
 
import MovieCards from "./MovieCards"; 
const MoviePlayList = (props)=>{
     
    const {Heading,Movies} = props;   
    // console.log(moiveList); 

    return (
        <>   
            <div>  
                <div className= "bg-neutral-950  relative -top-[30px]">  
                    <div className="relative z-30 -top-[280px] p-4"> 
                        <div className="relative z-50"> 
                        <h4 className=" text-white text-2xl font-bold p-3">{Heading}</h4>  
                        <div className="flex relative overflow-x-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full   scrollbar-thumb-slate-700 scrollbar-track-slate-300 scrollbar-thin  " > 
                            {Movies?.results?.map((item) => (  <MovieCards key={item.id}  cards={item}  title={item?.original_title} release_date={item?.release_date} MoiveId={item.id} />   
                                
                                ) )}  </div>
                        </div>  
                    </div>  
                </div>
            </div>
        </>
    )
};
export default MoviePlayList;