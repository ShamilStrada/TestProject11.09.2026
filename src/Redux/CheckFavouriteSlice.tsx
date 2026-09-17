import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface Props{
    favourite:boolean;
}
const User:Props={
    favourite:false
}
const Favourite = createSlice({
    initialState:User,
    name:'favourite',
    reducers:{

    }
})