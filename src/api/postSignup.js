import Axios from 'axios';
import url from './endpoint';

export const endpoint = `${url}/users`;

const postSignup = async ({ name, email, password }) => {
  try {
    const response = await Axios.post(endpoint, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default postSignup;
