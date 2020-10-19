import axios from 'axios';

export const BASE_URL = 'http://localhost:8080/_example/items';
axios.defaults.baseURL = BASE_URL;

export const getData = async (endpoint) => {
  return (await axios.get(endpoint)).data.data[0];
};

export const getFooter = async () => {
  const { footer } = await getData('/common');
  return footer;
};
