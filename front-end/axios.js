import axios from 'axios';

export const $axios = axios.create({
    baseURL: 'http://obuservices.com/api/',
    headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
    }
});