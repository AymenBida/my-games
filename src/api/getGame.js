import Axios from 'axios';
import url from './endpoint';

export const endpoint = `${url}/games/`;

const getGame = async (id) => {
  try {
    const response = await Axios.get(endpoint + id);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export default getGame;
