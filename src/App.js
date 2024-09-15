import { Provider } from "react-redux";
import Body from "./components/Body" ;
import appStorre from "./uittls/appStore";
import { Outlet } from "react-router-dom";
 const App =()=>{
    
    return(
        <Provider store={appStorre}> 
             <Body/>
             <Outlet/>  
        </Provider>
    ); 
 };

 export default App;