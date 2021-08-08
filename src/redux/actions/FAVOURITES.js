import { GET_FAVOURITES, ADD_FAVOURITE, DELETE_FAVOURITE } from './actionTypes';

const getFavouritesGameIds = (favourites) => favourites.map((favourite) => favourite.game_id);

export const getFavourites = (favourites) => ({
  type: GET_FAVOURITES,
  payload: getFavouritesGameIds(favourites),
});

export const addFavourite = (data) => ({
  type: ADD_FAVOURITE,
  payload: data,
});

export const deleteFavourite = (data) => ({
  type: DELETE_FAVOURITE,
  payload: data,
});
