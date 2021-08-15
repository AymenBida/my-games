import { axiosGet } from './callCenter';
import url from './endpoint';

export const endpoint = `${url}/favourites`;

const getFavourites = async (token) => {
  try {
    const response = await axiosGet(endpoint, { headers: { Authorization: token } });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export default getFavourites;
