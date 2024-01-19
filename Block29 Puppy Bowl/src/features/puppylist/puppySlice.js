import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: null,
    }


    export const  puppySlice=createSlice({
        name: "puppy",
        initialState,
        reducers: {
            addPlayer:(state,action)=>{
                state.push(action.payload)
            }
        }
    })


    export const {addPlayer} =puppySlice.actions

    export default puppySlice.reducer