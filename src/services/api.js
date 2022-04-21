import axios from 'axios';

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}

export function login(body) {
    const promise = axios.post(`${BASE_URL}/login`, body);
  
    return promise;
  }
  
  export function signUp(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
  
    return promise;
  }