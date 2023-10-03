import {
    setAvgPrice,
    setMaxPrice,
    setMinPrice, setMinPrices,
    startLoadingAllPrices,
    stopLoadingPrices
} from "./PrecioLuzSlice";
import {PrecioDeLaLuzApi} from "../../api/PrecioDeLaLuzApi";
import {sortMinPrices} from "../../functions/sortMinPrices";

export const getEnergyPrices = () => {
    return async (dispatch) => {
        try {
            dispatch(startLoadingAllPrices());

            let  data  = (await PrecioDeLaLuzApi.get(`/max?zone=PCB`)).data;
            dispatch(setMaxPrice({maxPrice : data}));
            console.log("MaxPrice " , JSON.stringify(data));


            data  = (await PrecioDeLaLuzApi.get(`/min?zone=PCB`)).data;
            dispatch(setMinPrice({minPrice: data}));
            console.log("MinPrice " , JSON.stringify(data));

            data  = (await PrecioDeLaLuzApi.get(`/avg?zone=PCB`)).data;
            dispatch(setAvgPrice({avgPrice: data}));
            console.log("AvgPrice " , JSON.stringify(data));


            data  = (await PrecioDeLaLuzApi.get(`/cheapests?zone=PCB&n=4`)).data;
            const [minPrices, firstMinPrice, lastMinPrice] = sortMinPrices(data);
            dispatch(setMinPrices({minPrices: minPrices, firstMinPrice: firstMinPrice, lastMinPrice: lastMinPrice}));
            console.log("MinPrices ",JSON.stringify(data));

            dispatch(stopLoadingPrices());
        } catch (error) {

            console.log(error , "Error ");
        }

    };
};