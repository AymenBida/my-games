import { axiosGet } from './callCenter';
import url from './endpoint';

export const endpoint = `${url}/games`;

const getGames = async () => {
  try {
    const response = await axiosGet(endpoint);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getGames;
