import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../features/favorites/favoritesSlice'
import userReducer from "../features/user/userSlice"
import mealsReducer from "../features/meals/mealsSlice"

//main approach
export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    user: userReducer,
    meals: mealsReducer
  },
})


