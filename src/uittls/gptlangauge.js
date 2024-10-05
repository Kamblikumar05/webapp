import { createSlice } from "@reduxjs/toolkit";

const GptLangauges = createSlice({
    name:"langauge",
    initialState:{
        lang:{
            lang:"English",search:"Search",placeholder:"What did you like to Watch today "
        }
    },
    reducers:{
        changeLangauge:(state,action)=>{
            state.lang = action.payload;
        }
        
    }

});


export const {changeLangauge} = GptLangauges.actions;
export default GptLangauges.reducer;