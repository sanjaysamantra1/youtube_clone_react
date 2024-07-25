import { configureStore } from '@reduxjs/toolkit'
import appSlice from '../utils/Slice/appSlice'

const store = configureStore ({
      reducer :{
          app : appSlice,
      }
})

export default store