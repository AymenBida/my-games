import Axios from 'axios';
import url from './endpoint';

export const endpoint = `${url}/games`;

const getGames = async () => {
  try {
    const response = await Axios.get(endpoint);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getGames;
