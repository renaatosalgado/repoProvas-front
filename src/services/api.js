import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export function login(body) {
  const promise = axios.post(`${BASE_URL}/auth/login`, body);

  return promise;
}

export function signUp(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);

  return promise;
}

export function validateToken(token) {
  const config = createConfig(token);
  const promise = axios.get(`${BASE_URL}/auth/validate`, config);

  return promise;
}

export function logout(token) {
  const config = createConfig(token);
  const promise = axios.delete(`${BASE_URL}/auth/logout`, config);

  return promise;
}
