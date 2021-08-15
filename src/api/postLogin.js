import { axiosPost } from './callCenter';
import url from './endpoint';

export const endpoint = `${url}/authentication`;

const postLogin = async ({ email, password }) => {
  try {
    const response = await axiosPost(endpoint, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default postLogin;
