import axios from 'axios';

const baseURL: string = 'https://opensea-api-converter.herokuapp.com/';

export function getAssets() {
    return axios.get(baseURL).then(r => r.data);
}