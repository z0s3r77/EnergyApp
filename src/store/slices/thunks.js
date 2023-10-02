import {
    setAvgPrice,
    setMaxPrice,
    setMinPrice,
    startLoadingAllPrices,
    stopLoadingPrices
} from "./PrecioLuzSlice";
import {PrecioDeLaLuzApi} from "../../api/PrecioDeLaLuzApi";

export const getEnergyPrices = () => {
    return async (dispatch) => {
        try {
            dispatch(startLoadingAllPrices());

            let  data  = (await PrecioDeLaLuzApi.get(`/max?zone=PCB`)).data;
            dispatch(setMaxPrice({maxPrice : data}))
            console.log("MaxPrice " , JSON.stringify(data));


            data  = (await PrecioDeLaLuzApi.get(`/min?zone=PCB`)).data;
            dispatch(setMinPrice({minPrice: data}))
            console.log("MinPrice " , JSON.stringify(data));

            data  = (await PrecioDeLaLuzApi.get(`/avg?zone=PCB`)).data;
            dispatch(setAvgPrice({avgPrice: data}))
            console.log("AvgPrice " , JSON.stringify(data));


            dispatch(stopLoadingPrices());
        } catch (error) {

            console.log(error , "Error ");
        }

    };
};