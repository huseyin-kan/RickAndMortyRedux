import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchCharacters = createAsyncThunk('characters/getCharacters',async(page)=>{
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/character/?page=${page}`)
    return res.data
})

export const characterSlice = createSlice({
    name:'characters',
    initialState:{
        items:[],
        isLoading:false,
        error:null,
    },
    reducers:{

    },
    extraReducers:builder=>{
        builder.addCase(fetchCharacters.fulfilled,(state,action)=>{
            state.items = action.payload.results
            state.isLoading = false
            state.page++
        })
        .addCase(fetchCharacters.pending,(state,action)=>{
            state.isLoading=true
        })
        .addCase(fetchCharacters.rejected,(state,action)=>{
            state.isLoading=false
            state.error = action.error.message
        })
    }
})


export default characterSlice.reducer