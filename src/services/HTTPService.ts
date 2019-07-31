import axios from 'axios';

const baseURL: string = 'https://opensea-api-converter.herokuapp.com/assets';

export function getAssets() {
    return axios.get(`${baseURL}/`).then(r => r.data);
}

export function getAssetsFor(assetName: string) {
    return axios.get(`${baseURL}/${assetName}`).then(r => r.data);
}