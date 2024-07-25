import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {VIDEO_API} from '../constant'

export const fetchVideos = createAsyncThunk('todos/fetchTodos', async () => {
   const res = await axios.get(VIDEO_API)
   const items = res?.data?.items
  return items
})

const app = createSlice({
   name : "app",
   initialState : {
       flag : false,
       videos : []
   },
   reducers:{
     toggleMenu : (state)=>{
        state.flag = !state.flag
     },
     setVideos : (state, action)=>{
        console.log(action.payload,"payload")
        state.videos = action.payload
     }
   },
   extraReducers: builder => {
      builder
        .addCase(fetchVideos.pending, (state, action) => {
          state.flag = true
        })
        .addCase(fetchVideos.fulfilled, (state, action) => {
         state.videos = action.payload
         
         })
      }
   
})

export const { toggleMenu, setVideos } = app.actions
export default app.reducer