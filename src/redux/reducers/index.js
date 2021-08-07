import { combineReducers } from 'redux';
import games from './games';
import credentials from './credentials';
import loginStatus from './loginStatus';
import game from './game';

export default combineReducers({
  games, credentials, loginStatus, game,
});
