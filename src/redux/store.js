import { configureStore } from '@reduxjs/toolkit'
import mapSlice from './services/mapSlice'

export const store = configureStore({
  reducer: {
    map: mapSlice,
  },
})
