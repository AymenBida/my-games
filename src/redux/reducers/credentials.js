import {
  CHANGE_NAME, CHANGE_EMAIL, CHANGE_PASSWORD, RESET_VALUES,
} from '../actions/actionTypes';

const initialState = { name: '', email: '', password: '' };

const credentialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case RESET_VALUES:
      return initialState;
    default:
      return state;
  }
};

export default credentialsReducer;
