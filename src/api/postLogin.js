import Axios from 'axios';
import url from './endpoint';

export const endpoint = `${url}/login`;

const postLogin = async ({ email, password }) => {
  try {
    const response = await Axios.post(endpoint, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default postLogin;
