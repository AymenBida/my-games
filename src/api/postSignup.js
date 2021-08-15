import { axiosPost } from './callCenter';
import url from './endpoint';

export const endpoint = `${url}/users`;

const postSignup = async ({ name, email, password }) => {
  try {
    const response = await axiosPost(endpoint, {
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
