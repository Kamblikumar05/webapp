import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./GptSlice"
import gptlangReducer from "./gptlangauge";

const appStorre = configureStore({
    reducer:{
        user:UserSlice,
        moive:movieReducer,
        gpt:gptReducer,
        gptlangauge:gptlangReducer,
    }
});

export default appStorre;