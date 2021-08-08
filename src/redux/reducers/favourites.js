import { GET_FAVOURITES, ADD_FAVOURITE, DELETE_FAVOURITE } from '../actions/actionTypes';

const favouritesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_FAVOURITES:
      return action.payload;
    case ADD_FAVOURITE:
      return [...state, action.payload];
    case DELETE_FAVOURITE:
      return state.filter((element) => element !== action.payload);
    default:
      return state;
  }
};

export default favouritesReducer;
