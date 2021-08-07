import { GET_GAME } from '../actions/actionTypes';

const gameReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_GAME:
      return action.payload;
    default:
      return state;
  }
};

export default gameReducer;
