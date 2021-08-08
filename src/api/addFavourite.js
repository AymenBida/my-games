import Axios from 'axios';

export const endpoint = 'http://localhost:3001/favourites';

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
