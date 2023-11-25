import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY_PARAM = '?api_key=8028d3288fcd93f879ca662015d5cfa9';

export class TvShowAPI {
    static async fetchPopulars() {
        const response = await axios.get(`${ BASE_URL }tv/popular${ API_KEY_PARAM }`);
        console.log(response.data.results)
        return response.data.results;
    }
}