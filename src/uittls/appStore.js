import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";
import movieReducer from "./movieSlice";


const appStorre = configureStore({
    reducer:{
        user:UserSlice,
        moive:movieReducer,
    }
});

export default appStorre;