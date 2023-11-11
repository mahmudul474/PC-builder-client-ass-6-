import {configureStore} from '@reduxjs/toolkit'
import {apiSlice} from "@/Redux/api/apiSlice";
import ProductsReducer from "@/Redux/features/productsSlice";
import PcBuildReducer from "@/Redux/features/pcBuildSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        products: ProductsReducer,
        pcBuild: PcBuildReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch