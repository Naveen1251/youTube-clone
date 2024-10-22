import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const cartSlice = createSlice({
    name: "chat",
    initialState : {
        messages : [],
    },
    reducers : {
        addMessage : (state,action)=>{
            state.messages.splice(OFFSET_LIVE_CHAT,1)
            state.messages.push(action.payload);
        },
    },
});

export const {addMessage} = cartSlice.actions

export default cartSlice.reducer;