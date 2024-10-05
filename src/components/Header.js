import { signOut } from "firebase/auth";
import { auth } from "../uittls/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { LOGOURL } from "../uittls/urls";
import { ChangeGptTogel } from "../uittls/GptSlice";
import { useRef } from "react";
import { GptLangauges, Langauges } from "./Langauges";
import { changeLangauge } from "../uittls/gptlangauge";
import { useNavigate } from "react-router-dom";

const Header = ()=>{
    const userIcon = useSelector((state)=>state?.user)
    const GptShowIcon  = useSelector((state)=>state?.gpt?.showGpt)
    const dispatch = useDispatch();  
    const navigator = useNavigate()

    const homesignOut = () =>{   


        signOut(auth).then(() => {   
            navigator("/")
            // Sign-out successful.
          }).catch((error) =>{
            console.log(error);
            // An error happened.
          });

    };

    const GptTogal = ()=>{
        dispatch(ChangeGptTogel())
    };

    const changelangaule=(e)=>{
        console.log(e.target.value); 
        GptLangauges.map((langauge)=> 
             langauge.lang === e.target.value && dispatch(changeLangauge(langauge))); 
    }
 
    return(
        <>
        <div className="relative bg-black h-[80px] bg-gradient-to-tr from-slate-900 ">  
        <div className="navbar justify-between flex basis-2/12">
            <div className=" flex-1  ">
                <div className="logo z-40 absolute h-[80px] "> 
                    <img src= {LOGOURL} alt="logo" className="h-[100%]" />
                </div>
            </div> 

        <div className="inputDev flex basis-8/12  "> 
            <input type="text" className="input w-[60%]   rounded-s-md  my-4 bg-slate-600 " placeholder="Search your faviorate Movies  " />
            <button className="searchButton  my-4  py-3 w-[5%] rounded-r-md bg-red-700 ">
                <span className="material-symbols-outlined font-extrabold mx-2  ">search</span>
            </button>
        </div> 

            <div className="navLinks  flex m-4 z-10  float-right"> 
                {/* <select className="w-[50px] h-[50px] bg-slate-700 text-white mx-2 " onChange={changelangaule}>
                    {Langauges.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.langName}</option>)} 
                </select>   */}

                {/* <button onClick={GptTogal} className="bg-purple-800 w-[150px] mx-1 rounded-sm "  >  
                     { GptShowIcon ? "Home Page"  : "Gpt Search"    } </button>  */}
                

                  { userIcon  == null  ? "  " :  <div><img src = {userIcon.photoURL}  alt="user img" className="usericon h-[50px] mx-3 rounded-sm"/></div>  } 
                  
                <button onClick={()=> homesignOut() } className="singout bg-red-700 rounded-sm  h-[50px] w-[80px]"> Sign out  </button>   
                 
            </div>   
        </div> 
      </div>
        </>
    );

     
};

export default Header;
