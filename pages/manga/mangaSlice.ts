import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Double } from 'mongodb'
import { RootState } from '../store'
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

export const saveManga = createAsyncThunk('manga/saveManga', async (_, { getState }) => {
    const state = getState() as RootState;
    const savedManga = state.manga;
    await axios.post('http://localhost:3000/api/manga', savedManga)
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
         console.log("Current Manga: " + (savedManga))
       },
       addImage: (state, action: PayloadAction<string>) => {
            state.image = action.payload
       }
    }
})


export const setManga = createAsyncThunk('manga/getManga', async (foundManga: MangaState) => {
    addName(foundManga.Name)
    addPrice(foundManga.price)
    addDesc(foundManga.desc)
    addImage(foundManga.image)
})

export const {addName, addCondition, addDesc, addPrice, getCurrentManga, addImage } = mangaSlice.actions

//export const selectName = (state: RootState ) => state.manga.Name;
// export const selectPrice = ( state: RootState ) => state.manga.price

export default mangaSlice.reducer;

