import {configureStore} from '@reduxjs/toolkit'
import characterSlice from './characterSlice'
import  locationSlice  from './locationSlice'

export const store = configureStore({
    reducer:{
        characters:characterSlice,
        locations:locationSlice
    },
})