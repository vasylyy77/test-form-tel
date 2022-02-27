import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './slise/sliseData'
export const store = configureStore({
  reducer: {
      user:usersSlice
  },
})