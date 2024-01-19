import { configureStore } from '@reduxjs/toolkit'
import puppyReducer from '../features/puppylist/puppySlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { puppyApi } from '../api/api'

export const store = configureStore({
  reducer: {
    [puppyApi.reducerPath]: puppyApi.reducer,
    puppy:puppyReducer,

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(puppyApi.middleware),
})


setupListeners(store.dispatch)