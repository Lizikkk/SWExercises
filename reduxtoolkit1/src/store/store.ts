import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './users/user.slice'


const rootReducer = combineReducers({
    userReducer
})

export const setupStore = () => configureStore({
  reducer: rootReducer,
  devTools: true
})

export type AppStore = ReturnType<typeof setupStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']