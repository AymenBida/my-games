import Axios from 'axios';

export const endpoint = 'http://localhost:3001/favourites';

const getFavourites = async (token) => {
  try {
    const response = await Axios.get(endpoint, { headers: { Authorization: token } });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export default getFavourites;
