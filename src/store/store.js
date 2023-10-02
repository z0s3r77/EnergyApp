import {configureStore} from '@reduxjs/toolkit'
import {PrecioLuzSlice} from "./slices/PrecioLuzSlice";

export const store = configureStore({

    reducer: {
        precioLuz: PrecioLuzSlice.reducer,
    },


});