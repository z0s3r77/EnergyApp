import { createSlice } from "@reduxjs/toolkit";

export const PrecioLuzSlice = createSlice({

    name: 'precioLuz',
    initialState: {
        allPrices: null,
        avgPrice: null,
        maxPrice: null,
        minPrice: null,
        minPrices: null,
        firstMinPrice: null,
        lastMinPrice: null,
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

        setMinPrices: (state, action) => {
          state.minPrices = action.payload.minPrices;
          state.firstMinPrice = action.payload.firstMinPrice;
          state.lastMinPrice = action.payload.lastMinPrice;
        },

        stopLoadingPrices: (state) => {
            state.isLoading = false;
        }
    }
});

export const { startLoadingAllPrices, setAllPrices, setMaxPrice, stopLoadingPrices, setMinPrice, setAvgPrice, setMinPrices } = PrecioLuzSlice.actions;