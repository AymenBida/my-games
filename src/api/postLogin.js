import Axios from 'axios';

export const endpoint = 'http://localhost:3001/login';

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
