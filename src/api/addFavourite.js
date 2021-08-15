import { axiosPost } from './callCenter';
import url from './endpoint';

export const endpoint = `${url}/favourites`;

const addFavourite = async (gameId, token) => {
  try {
    const response = await axiosPost(
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
