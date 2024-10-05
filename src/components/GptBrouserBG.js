 
import { LOGIN_PAGE_BGIM } from "../uittls/urls";
import { useSelector } from "react-redux";

const GptBrouserBG=()=>{
    const lang = useSelector(state=>state.gptlangauge.lang)
     

    return (
        <div>
            <div className="absolute w-1/2 bg-slate-800  bottom-[100px] mx-[25%] h-14 rounded-full">
                <div className="relative grid grid-cols-12 my-2"> 
                    <input type="text" placeholder={lang.placeholder}  className="relative col-span-9 h-7 p-5 rounded-full mx-2 " />
                    <button className=" col-span-3 bg-slate-500 mx-2 border-2 border-zinc-300 hover:bg-slate-400 rounded-full"  >{lang.search}</button> 
                </div>
            </div>
            <img src={LOGIN_PAGE_BGIM} alt="BgImage"/>
             
        </div>
         
    )
     

};

export default GptBrouserBG;