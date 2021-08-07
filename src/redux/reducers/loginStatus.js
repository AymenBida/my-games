import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = {
  username: localStorage.getItem('username') ?? undefined,
  token: localStorage.getItem('token') ?? undefined,
};

const credentialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return {
        username: undefined,
        token: undefined,
      };
    default:
      return state;
  }
};

export default credentialsReducer;
