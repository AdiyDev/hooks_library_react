// import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
// import { AppDispatch, RootState } from "../store/store"

// export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = ReturnType<typeof setupStore>

// export const useAppDispatch = () => useDispatch<AppDispatch>()
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// const rootReducer = combineReducers({
//   userReducer,
//   [someApi.reducerPath]: someApi.reducer
// })

// export const setupStore = () => {
//   return configureStore({
//     reducer: rootReducer,
//     middleware: getDefaultMiddleware =>
//       getDefaultMiddleware().concat(someApi.middleware)
//   })
// }
