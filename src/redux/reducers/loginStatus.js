import {
  LOGIN, LOGOUT, SUCCESS, FAILURE,
} from '../actions/actionTypes';

const initialState = {
  username: localStorage.getItem('username') ?? undefined,
  token: localStorage.getItem('token') ?? undefined,
  success: undefined,
  failure: undefined,
};

const credentialsReducer = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.payload };
    case LOGOUT:
      return {
        username: undefined,
        token: undefined,
        success: undefined,
        failure: undefined,
      };
    case SUCCESS:
      return { ...state, success: action.payload };
    case FAILURE:
      return { ...state, failure: action.payload };
    default:
      return state;
  }
};

export default credentialsReducer;
