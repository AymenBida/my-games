import Axios from 'axios';

export const endpoint = 'http://localhost:3001/favourites/';

const deleteFavourite = async (gameId, token) => {
  try {
    const response = await Axios.delete(
      `${endpoint}${gameId}`,
      { headers: { Authorization: token } },
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export default deleteFavourite;
