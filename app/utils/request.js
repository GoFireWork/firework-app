import axios from 'axios';
import apiURL from '../apiUrl';

const baseRequest = axios.create({
  apiURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 60000,
});

export function getRequest(url, options) {
  return baseRequest.get(url, options);
}

export function postRequest(url, options) {
  return baseRequest.post(url, options);
}
