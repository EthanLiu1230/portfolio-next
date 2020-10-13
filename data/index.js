// data/ is for fetching data from strapi
import axios from 'axios';

export const baseUrl = 'http://127.0.0.1:1337';
axios.defaults.baseURL = baseUrl;

export const get = async (endpoint) => {
  const res = await axios.get(endpoint);
  return res.data;
};
