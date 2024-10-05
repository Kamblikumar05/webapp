import {   useNavigate } from "react-router-dom"; 
import { auth } from "../uittls/Firebase";
import { onAuthStateChanged } from "firebase/auth"; 
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeruser } from "../uittls/userSlice";
import { useEffect } from "react"; 
import Brouser from "./Brouser";
import Header from "./Header"; 

const BrouserComponent=()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
     
    // useNowPlayingMovie(); 
    // usePopularMovies();
    // useTopRatedMovies();
    // useUpComeingMovies(); 

    


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
     <Header/>
     <Brouser/> 
        </>

    )
};
export default BrouserComponent;