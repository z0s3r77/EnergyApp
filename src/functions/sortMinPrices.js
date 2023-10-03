
export const sortMinPrices = (data) => {

    data.sort((a, b) => {
        const hourA = a.hour;
        const hourB = b.hour;
        if (hourA < hourB) {
            return -1;
        }
        if (hourA > hourB) {
            return 1;
        }
        return 0;
    });

    let firstMinPrice = data[0].hour.split('-')[0];
    let lastMinPrice = data[data.length - 1 ].hour.split('-')[1];


    return [data, firstMinPrice, lastMinPrice];

}