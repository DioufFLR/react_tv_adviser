import axios from 'axios';
import {BASE_URL, API_KEY_PARAM} from "../config.js";

export class TVShowAPI {
    static async fetchPopulars() {
        const response = await axios.get(`${ BASE_URL }tv/popular${ API_KEY_PARAM }`);
        return response.data.results;
    }
}