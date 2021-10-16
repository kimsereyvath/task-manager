import store from '../store/store.js';
import axios from 'axios';
import * as auth from './AuthService.js'

export function http() {
    return axios.create({
        baseURL: store.state.apiUrl,
        headers: {
            Authorization: auth.getToken()
        }
    });
}