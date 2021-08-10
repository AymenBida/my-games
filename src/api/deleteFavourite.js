import Axios from 'axios';
import url from './endpoint';

export const endpoint = `${url}/favourites/`;

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
