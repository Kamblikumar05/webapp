import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"user",
    initialState: null,
    reducers:{
        adduser:(state,action )=>{
            return action.payload
        },
        removeruser:(state,action )=>{
            return null
        }
    }
});

export const {adduser,removeruser} = UserSlice.actions;

export default UserSlice.reducer;


 