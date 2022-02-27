import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (fromDispatch, { rejectWithValue }) => {
    try {
      const response = await fetch(

        'http://localhost:3004/users'
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



export const fetchUserAdd = createAsyncThunk(
  'users/fetchUserAdd',
  async (fromDispatch, { rejectWithValue, dispatch }) => {
    try {

      const data = {

        name: fromDispatch.name,
        lastName: fromDispatch.lastName,
        tel: [fromDispatch.tel, fromDispatch.tel0, fromDispatch.tel1, fromDispatch.tel2]
      }

      const response = await fetch(

        'http://localhost:3004/users',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'

          },
          body: JSON.stringify(data)
        });


    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = 'resolve';
      state.users = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },


  },
});
export default usersSlice.reducer;
