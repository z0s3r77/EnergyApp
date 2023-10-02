import axios from 'axios';

export const PrecioDeLaLuzApi = axios.create({

    baseURL: 'https://api.preciodelaluz.org/v1/prices'
    });