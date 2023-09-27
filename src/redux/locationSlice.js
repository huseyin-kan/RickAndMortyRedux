import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchLocations = createAsyncThunk('/locations/fetchAll',async ()=>{
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/location`)

    return res.data.results
})

export const locationSlice = createSlice({
    name:'locations',
    initialState:{
        items:[],
        status:'idle',
        error:null
    },
    reducers:{},
    extraReducers:builder=>{
        builder.addCase(fetchLocations.fulfilled,(state,action)=>{
            state.items = action.payload
            state.status='succeeded'
        })
        .addCase(fetchLocations.pending, (state,action)=>{
            state.status='loading'
        })
        .addCase(fetchLocations.rejected,(state,action)=>{
            state.status='failed'
            state.error = action.error.message
        })
    }
})

export const locationSelector = (state) => state.locations.items
export const statusSelector = (state) => state.locations.status
export const errorSelector = (state) => state.locations.error

export default locationSlice.reducer