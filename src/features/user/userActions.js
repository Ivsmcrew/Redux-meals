import { createAsyncThunk } from "@reduxjs/toolkit"

//returns a thunk action creator
export const getUserById = createAsyncThunk(
  'user/getById',
  async (userId, thunkAPI) => {
    try {
      const response = await fetchUserById(userId)
      return response
    } catch (error) {
      thunkAPI.rejectWithValue(error)
    }
  }
)

//just an auxiliary func for server imitation
const fetchUserById = (userUd) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve( {id: 1, name: 'Valeryy Kozhura'})
    }, 1000)
  })
}
