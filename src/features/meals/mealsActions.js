import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMeals = createAsyncThunk(
  'meals/getMeals',
  async (_, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:4200/recipes")
      const meals = await response.json();
      return meals
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  }
)