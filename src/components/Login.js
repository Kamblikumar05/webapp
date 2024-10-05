 
import { useEffect } from "react";
import SigInPage from "./sigInpage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../uittls/Firebase";
import { useDispatch } from "react-redux";
import { adduser, removeruser } from "../uittls/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGIN_PAGE_BGIM, LOGOURL } from "../uittls/urls.js";
import { clearStorage } from "../uittls/movieSlice.js";

const Login =()=>{  
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(()=>{  
       const unSubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) { 
          const {uid,email,displayName,photoURL} = user;
          dispatch(adduser({uid:uid, email:email,displayName:displayName,photoURL:photoURL})); 
          navigate("/brouser");
        } else {  
          // User is signed out
          dispatch(removeruser())
          navigate("/") ;
          // ..
        } });
        return () => { unSubscribe() };   
    },[ ]);
    
    return(
        
        <div className="Loginpage absolute bg-black "> 
            <div className="logo z-40 absolute  w-[15%] ml-[6%]   bg-gradient-to-b from-black  "> 
            <img src={  LOGOURL}  alt="logo"  /> 
            </div> 
              <SigInPage/>
            <img src= {LOGIN_PAGE_BGIM} alt="bgimage" className="bgimage min-h-[1000px]  "/>
            <div className=  "baground absolute bg-black h-full  w-full"></div> 

            
            
        </div>
    )
};
export default Login;