import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const isExists = () => {
        if ( state.find((recipe) => recipe.id === action.payload.id) ) {
          return true
        } else {
          return false
        }
      }

      if (isExists) {
        state = state.filter((recipe) => recipe.id !== action.payload.id)
      } else {
        state.push(action.payload)
      }
    }
  },
})

export const { toggleFavorites } = favoritesSlice.actions
// export const { actions, reducer } = favoritesSlice

export default favoritesSlice.reducer