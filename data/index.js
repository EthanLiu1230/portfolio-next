import axios from 'axios';

export const BASE_URL = 'http://localhost:8080/_example/items';
axios.defaults.baseURL = BASE_URL;

export const getData = async (endpoint) => {
  const { data } = await axios.get(endpoint);
  return data.data;
};

export const getFooter = async () => {
  const res = await axios.get('/common');
  const data = res.data.data;
  const [{ footer }] = data;
  return footer;
};
