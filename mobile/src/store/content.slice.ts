import api from '@/lib/api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export interface ContentState {
  messages: string[]
  isLoading: boolean
  error: string | null
}

const initialState: ContentState = {
  messages: [],
  isLoading: false,
  error: null,
}

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async () => {
    return api.getMessage()
  }
)

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false
      state.messages = action.payload
    })
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message || null
    })
  },
})

export default contentSlice.reducer