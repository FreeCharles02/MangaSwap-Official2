import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MangaState } from '../manga/mangaSlice'


export interface CollectionState {
    Items: MangaState[]
    Name: string
    Type: string
}

const initialState: CollectionState = {
    Items: null,
    Name: null, 
    Type: null
}

export const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers: {
      addToCollection: (state, action: PayloadAction<MangaState>) => {
        state.Items.push(action.payload)
      },
      addName: (state, action: PayloadAction<string>) => {
        state.Name = action.payload
      },
      addType: (state, action: PayloadAction<string>) => {
        state.Type = action.payload
      },
      addCollection: (state) => {
        const savedCollection = {...state}
      }

    }
})