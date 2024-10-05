import { createSlice } from "@reduxjs/toolkit";


const GptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGpt:false,
    },
    reducers:{
        ChangeGptTogel:(state)=>{
            state.showGpt = !state.showGpt;
        }
    }
});

export const {ChangeGptTogel} = GptSlice.actions;
export default GptSlice.reducer;