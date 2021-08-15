import { axiosDelete } from './callCenter';
import url from './endpoint';

export const endpoint = `${url}/favourites/`;

const deleteFavourite = async (gameId, token) => {
  try {
    const response = await axiosDelete(
      `${endpoint}${gameId}`,
      { headers: { Authorization: token } },
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export default deleteFavourite;
