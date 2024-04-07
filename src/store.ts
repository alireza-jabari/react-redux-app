import userSlice, { userSliceType } from './features/userSlice';
import { configureStore } from "@reduxjs/toolkit"

export type storeType={
    userSlice:userSliceType[]
}

export const store=configureStore({
    reducer:{
        userSlice:userSlice
    },
    devTools:true,
})