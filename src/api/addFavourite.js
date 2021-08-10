import Axios from 'axios';
import url from './endpoint';

export const endpoint = `${url}/favourites`;

const addFavourite = async (gameId, token) => {
  try {
    const response = await Axios.post(
      endpoint,
      { game_id: gameId },
      { headers: { Authorization: token } },
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export default addFavourite;
