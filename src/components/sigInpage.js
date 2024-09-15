import {   useRef, useState } from "react";
import { ValidationEP } from "../uittls/Validation";
import {  createUserWithEmailAndPassword,  signInWithEmailAndPassword, updateProfile } from "firebase/auth"; 
import { auth } from "../uittls/Firebase"; 
import { adduser } from "../uittls/userSlice";
import { useDispatch } from "react-redux";  
import {  updateEmail } from "firebase/auth"; 
import {  sendEmailVerification } from "firebase/auth";
import { USER_AVATRA } from "../uittls/urls.js"  


const SigInPage = ()=>{
    
    const dispatch = useDispatch() 
    const [isSigin,setisSigin] = useState(true);
    const FullName = useRef();
    const email = useRef();
    const password = useRef();     
    const [erromessage,seterrormessage] = useState(null);  

     

    const togglesiginForm =()=>{ 
        setisSigin(!isSigin) 
    } 

    const handleClick=(email,password )=>{  
       const message =  ValidationEP(email.current.value, password.current.value) ; 
       seterrormessage(message); 
       if(message) return ;

       if(!isSigin){       
             
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
             .then((userCredential) => { 
                const user = userCredential.user;  
                  sendEmailVerification(auth.currentUser)
                    .then(() => {
                        // Email verification sent!
                        console.log('Email verification sent!')
                        // ...
                    });
                updateProfile(user, {
                    displayName: FullName.current.value, photoURL: USER_AVATRA,
                    
                    
                }).then(( ) => {
                    const {uid,email,displayName,photoURL} = user;
                    dispatch(adduser({uid:uid, email:email,displayName:displayName,photoURL:photoURL}))
                    // Profile updated!  
                    
                }).catch((error) => {
                    // An error occurred
                    // ...
                }); 
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;  
                seterrormessage("Your already register sign In now")
                // ..
            });
        }
        else{   
        signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
        .then((userCredential) => { 
            const user = userCredential.user;     
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
            seterrormessage("Your not register plase sign Up now") ;
        });
        };   
    }

    return ( <> 
        <div className="SingInbox border-2 bg-black bg-opacity-70  border-gray-950 absolute   z-50 w-3/12 my-48 h-4/6 mx-auto left-0 right-0 min-h-4/6  min-w-[200px]">
            <div className="sigIn text-white text-4xl mt-4 mx-4 font-bold"> {isSigin ? "sign In" :"sign Up"} </div>
            <form onSubmit={(e)=> e.preventDefault()} className="form absolute m-5">
                {!isSigin && <input ref={FullName} type="text" placeholder="Enter yoour full name " className="email  my-4 p-2 w-full rounded-md " />} 
                
                <input ref={email } type="text" placeholder="Enter your Email" className="email  my-4 p-2 w-full rounded-md "  />
                <input ref={password } type="text" placeholder="Enter your Password" className="password my-4 p-2 w-full rounded-md "   />
                <p className="errormessage text-red-700 p-1">{erromessage}</p>  
                <button onClick={()=>handleClick(email,password )} className="border-2  mb-6  p-1 w-full rounded-md bg-red-600 text-white font-semibold "  >{isSigin ? "sign In" :"sign Up"}</button>
                <p className="sigup text-white cursor-pointer " onClick={togglesiginForm}  > {isSigin ? "New to Netflix? Sign Up now." :"Already register Sign In Now "}  </p> 
            </form> 
        </div>  </>
    )
};
export default SigInPage;