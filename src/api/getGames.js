import Axios from 'axios';

export const endpoint = 'http://localhost:3001/games';

const getGames = async () => {
  try {
    const response = await Axios.get(endpoint);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getGames;
