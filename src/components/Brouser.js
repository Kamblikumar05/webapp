 
import { useSelector } from "react-redux"; 
import MeanContainer from "./MeanContainer";
import SecoundaryContainer  from  "./SecoundaryContainer"
import GptPage from "./GptPage";


const Brouser =()=>{  
    // useNowPlayingMovie(); 
    // usePopularMovies();
    // useTopRatedMovies();
    // useUpComeingMovies(); 
    const showGpt = useSelector(state=>state.gpt.showGpt)
     
    return (  
        <> {showGpt  ? <GptPage/> : <> <MeanContainer/> 
            <SecoundaryContainer/></>   }
         
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