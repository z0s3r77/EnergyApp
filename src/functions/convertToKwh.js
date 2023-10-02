export const convertToKWh = (MWh) => {
    const pricePerKWh = MWh / 1000;
    console.log(MWh);
    return pricePerKWh.toFixed(2);

}