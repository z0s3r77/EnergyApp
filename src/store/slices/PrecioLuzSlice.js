import { createSlice } from "@reduxjs/toolkit";

export const PrecioLuzSlice = createSlice({

    name: 'precioLuz',
    initialState: {
        allPrices: null,
        avgPrice: null,
        maxPrice: null,
        minPrice: null,
        isLoading: false,
    },
    reducers: {

        startLoadingAllPrices: (state) => {
          state.isLoading = true;
        },

        setAllPrices: (state, action) => {
            state.allPrices = action.payload.prices;
        },

        setMaxPrice: (state, action) => {

            state.maxPrice = action.payload.maxPrice;
        },

        setMinPrice: (state, action) => {
            state.minPrice = action.payload.minPrice;
        },

        setAvgPrice: (state, action) => {
            state.avgPrice = action.payload.avgPrice;
        },

        stopLoadingPrices: (state) => {
            state.isLoading = false;
        }
    }
});

export const { startLoadingAllPrices, setAllPrices, setMaxPrice, stopLoadingPrices, setMinPrice, setAvgPrice } = PrecioLuzSlice.actions;