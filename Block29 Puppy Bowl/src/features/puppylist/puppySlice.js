import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: null,
    searchText:null
    }


    export const  puppySlice=createSlice({
        name: "puppy",
        initialState,
        reducers: {
            addToState:(state,action)=>{
                state.list=action.payload;
            },
            addSearchTextToState:(state,action)=>{
                state.searchText=action.payload;
            }
        }
    })


    export const {addToState, addSearchTextToState} =puppySlice.actions

    export default puppySlice.reducer