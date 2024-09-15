import {   useNavigate } from "react-router-dom"; 
import { auth } from "../uittls/Firebase";
import {   signOut } from "firebase/auth"; 
import {  useSelector } from "react-redux";  
import { onAuthStateChanged } from "firebase/auth"; 
import { useDispatch } from "react-redux";
import { adduser, removeruser } from "../uittls/userSlice";
import { useEffect } from "react";
import { LOGOURL } from "../uittls/urls";
import Brouser from "./Brouser";

const BrouserComponent=()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()  
    const userIcon = useSelector((state)=>state.user)  

    const homesignOut = () =>{   
        signOut(auth).then(() => {   
            // Sign-out successful. 
          }).catch((error) =>{
            console.log(error)
            // An error happened.
          });
    };


    useEffect(()=> { 
       const  unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) { 
        // User is signed In
          const {uid,email,displayName,photoURL} = user;
          dispatch(adduser({uid:uid, email:email,displayName:displayName,photoURL:photoURL})); 
          navigate("/brouser");
        } else {  
          // User is signed out
          dispatch(removeruser());
          navigate("/") ;
        } });
        return () => { unSubscribe(); };  
      },[ ]);
 
    return (<>  
    <div className="relative bg-black h-[80px] bg-gradient-to-tr from-slate-900">  
        <div className="navbar justify-between flex">
            <div>
            <div className="logo z-40 absolute h-[80px] "> 
                <img src= {LOGOURL} alt="logo" className="h-[100%]" />
            </div> 
            </div>
            <div className="navLinks  flex m-4 z-10 ">   
                  { userIcon  == null  ? "  " :  <div><img src = {userIcon.photoURL}  alt="user img" className="usericon h-[50px] " /></div>  } 
                <button onClick={()=> homesignOut() } className="singout bg-red-600 rounded-sm mx-3 h-[50px] w-[80px]"> Sign out  </button>   
            </div>   
        </div> 
      </div>
      <Brouser/>   
        </>

    )
};
export default BrouserComponent;