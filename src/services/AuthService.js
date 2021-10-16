import store from '../store/store';
import {http} from './HttpService.js';
import jwt from 'jsonwebtoken';


export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token != null;
}

export async function login(user) {
    //const token = {
    //    username: 'sereyvath'
    //}
    const res = await http().post('/auth', user);
    if (res) {
        //console.log(res);
        //const fakeToken = {
         //   token: 'my-token'
        //};
        setToken(res.data.token);
    } else {
        console.log('No Token')
    }
    //setToken(token);
}

export function logout() {
    localStorage.clear();
    store.dispatch('authenticate');
}

function setToken(token) {
    //localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('token', token);
    store.dispatch('authenticate');
}

export function getToken() {
    return localStorage.getItem('token');
}

export function getUsername() {
    const token = decodeToken();
    if (!token) {
        return null;
    }
    return token.user.username;
}

export function getUserId() {
    const token = decodeToken();
    if (!token) {
        return null;
    }
    return token.user.id;
}

export function registerUser(user) {
    return http().post('/register', user);
}

function decodeToken() {
    const token = getToken();
    if (!token) {
        return null;
    }
    return jwt.decode(token);
}