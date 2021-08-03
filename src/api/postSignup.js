import Axios from 'axios';

export const endpoint = 'http://localhost:3001/signup';

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
