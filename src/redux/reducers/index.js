import { combineReducers } from 'redux';
import games from './games';
import loginStatus from './loginStatus';
import game from './game';
import favourites from './favourites';

export default combineReducers({
  games, loginStatus, game, favourites,
});
