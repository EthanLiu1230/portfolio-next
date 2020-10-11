// data/ is for fetching data from strapi
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:1337';
axios.defaults.baseURL = baseUrl;

export const getHomepage = async () => {
  const res = await axios.get('/homepage');
  console.log('data', res.data);

  const { hero } = res.data;
  return { hero };
};
