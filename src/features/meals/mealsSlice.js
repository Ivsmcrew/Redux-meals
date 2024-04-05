import { createSlice } from "@reduxjs/toolkit";
import { getMeals } from "./mealsActions";

const initialState = {
  isLoading: false,
  error: null,
  meals: []
}

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMeals.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(getMeals.fulfilled, (state, action) => {
        state.isLoading = false
        action.payload.forEach(meal => {
          state.meals.push(meal)
        });
      })
      .addCase(getMeals.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error
      })
  }
})

export const {} = mealsSlice.actions

export default mealsSlice.reducer