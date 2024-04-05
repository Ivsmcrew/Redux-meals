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

      if (isExists()) {
        let index;
        state.forEach((recipe, ind) => {
          if (recipe.id === action.payload.id) {
            index = ind
          }
        })
        state.splice(index, 1)
      } else {
        state.push(action.payload)
      }
    }
  },
})

export const { toggleFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer