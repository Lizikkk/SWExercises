import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {PostAPI } from './post/post.api'


const rootReducer = combineReducers({
    [PostAPI.reducerPath] : PostAPI.reducer
})

export const setupStore = () => configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(PostAPI.middleware)
})

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']