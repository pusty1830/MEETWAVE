import { createAxiosClient } from "./axiosConfigs";
import { jwtDecode } from "jwt-decode";

const BASE_URL = 'http://localhost:8080/api/';


export function getCurrentAccessToken() {
    return localStorage.getItem('accessToken');
}

export function isLoggedIn() {
    if (localStorage.getItem('accessToken')) {
        return true;
    }
    else {
        return false;
    }
}

export async function logout() {
    localStorage.clear();
    window.location.href = '/login';
    return 0;
}
export function setCurrentAccessToken(accessToken: any) {
    return localStorage.setItem('accessToken', accessToken)
}

export function getUserName(): string {
    let token: any = localStorage.getItem('accessToken');
    if (token) {
        let decoded: any = jwtDecode(token);
        // console.log("user Details bro!=",decoded)
        return decoded.name || '';
    }
    else {
        return '';
    }
}

export function getUserId(): number {
    let token: any = localStorage.getItem('accessToken');
    if (token) {
        let decoded: any = jwtDecode(token);
        console.log(decoded)
        return decoded?.id || 0;
    }
    else {
        return 0;
    }
}


export const client = createAxiosClient({
    options: {
        baseURL: BASE_URL,
        timeout: 300000,
        headers: {
        }
    },
    getCurrentAccessToken,
})
