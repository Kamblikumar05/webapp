 
import {   createBrowserRouter, RouterProvider } from "react-router-dom";  
import Login from "./Login";
import BrouserComponent from "./BrouserComponent";
import Brouser from "./Brouser";

const Boby =( )=>{  
    const appRounrt = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
         
        {
            path:"/brouser",
            element:<BrouserComponent/>, 
        }
    ] );
    
        
     
     
      

    return (
        <> 
        { <RouterProvider router={appRounrt}/>  }
        </>
    )
};
export default Boby;