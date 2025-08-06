import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Double } from 'mongodb'
import { RootState } from '../store'
import { Image } from 'react-native'

export interface MangaState {
    Name: string, 
    price: Double,
    desc: string,
    condition: string,
    image: File 
}


const initialState: MangaState = {
    Name: " ",
    price: null, 
    desc: null, 
    condition: null, 
    image: null
}   

export const mangaSlice = createSlice({
    name: "manga",
    initialState,
    reducers: {
        addName: (state, action: PayloadAction<string>) => {
            state.Name = action.payload
        }, 
        addPrice: (state, action: PayloadAction<Double> ) => {
            state.price = action.payload;
        },
       addDesc: (state, action: PayloadAction<string>) => {
            state.desc = action.payload; 
       },
       addCondition: (state, action: PayloadAction<string>) => {
         state.condition = action.payload
       }
    }
})

export const {addName, addCondition, addDesc, addPrice } = mangaSlice.actions

//export const selectName = (state: RootState ) => state.manga.Name;
// export const selectPrice = ( state: RootState ) => state.manga.price

export default mangaSlice.reducer;