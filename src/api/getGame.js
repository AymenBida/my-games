import Axios from 'axios';

export const endpoint = 'http://localhost:3001/games/';

const getGame = async (id) => {
  try {
    const response = await Axios.get(endpoint + id);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export default getGame;
