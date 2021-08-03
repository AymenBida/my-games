import { CHANGE_NAME, CHANGE_EMAIL, CHANGE_PASSWORD } from '../actions/actionTypes';

const credentialsReducer = (state = { name: '', email: '', password: '' }, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export default credentialsReducer;
