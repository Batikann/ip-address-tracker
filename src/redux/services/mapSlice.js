import { createSlice } from '@reduxjs/toolkit'
import { fetchApiToLocation } from './service'

const mapSlice = createSlice({
  name: 'map',
  initialState: {
    data: false,
    isLoading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchApiToLocation.pending, (state) => {
      state.isLoading = true
    }),
      builder.addCase(fetchApiToLocation.fulfilled, (state, action) => {
        ;(state.isLoading = false), (state.data = action.payload)
      })
  },
})

export default mapSlice.reducer
