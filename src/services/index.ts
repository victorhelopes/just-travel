import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://65b98494b71048505a8aea91.mockapi.io/api/v1',
});