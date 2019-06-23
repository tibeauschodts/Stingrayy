import axios from 'axios';

const devURL: string = 'http://localhost:3200';
const prodURL: string = 'https://opensea-api-converter.herokuapp.com/';

export function getAssets() {
    return axios.get(prodURL).then(r => r.data);
}