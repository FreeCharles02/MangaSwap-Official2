import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Double } from 'mongodb'
import { RootState } from '../store'
import { Image } from 'react-native'
import axios from 'axios'

export interface MangaState {
    Name: string, 
    price: string,
    desc: string,
    condition: string,
    image: string 
}


const initialState: MangaState = {
    Name: " ",
    price: null, 
    desc: null, 
    condition: null, 
    image: null
}

export const saveManga = createAsyncThunk('manga/saveManga', async (dispatch, getState) => {
    const savedManga = getState
    axios.post('api/managa', savedManga)
    .then((response) => {
        console.log(response.data)
    })
})


export const mangaSlice = createSlice({
    name: "manga",
    initialState,
    reducers: {
        addName: (state, action: PayloadAction<string>) => {
            state.Name = action.payload
        }, 
        addPrice: (state, action: PayloadAction<string> ) => {
            state.price = action.payload;
        },
       addDesc: (state, action: PayloadAction<string>) => {
            state.desc = action.payload; 
       },
       addCondition: (state, action: PayloadAction<string>) => {
         state.condition = action.payload
       },
       getCurrentManga: (state) => {
         const savedManga = {...state}
         console.log(savedManga);       
       },
       addImage: (state, action: PayloadAction<string>) => {
            state.image = action.payload
       }
    }
})


const getManga = createAsyncThunk('manga/getManga', async () => {
    
})

export const {addName, addCondition, addDesc, addPrice, getCurrentManga, addImage } = mangaSlice.actions

//export const selectName = (state: RootState ) => state.manga.Name;
// export const selectPrice = ( state: RootState ) => state.manga.price

export default mangaSlice.reducer;

