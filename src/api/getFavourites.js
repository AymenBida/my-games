import Axios from 'axios';
import url from './endpoint';

export const endpoint = `${url}/favourites`;

const getFavourites = async (token) => {
  try {
    const response = await Axios.get(endpoint, { headers: { Authorization: token } });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export default getFavourites;
