import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${
  import.meta.env.VITE_REACT_API_KEY
}`

export const fetchApiToLocation = createAsyncThunk(
  'fetchAllStartsShips',
  async (apiAddress) => {
    try {
      const { data: res } = await axios.get(
        `${API_URL}&ipAddress=${apiAddress}`
      )
      const data = await res
      return data
    } catch (error) {
      window.alert(error)
    }
  }
)
