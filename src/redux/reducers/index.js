import { combineReducers } from 'redux';
import games from './games';
import credentials from './credentials';
import loginStatus from './loginStatus';

export default combineReducers({ games, credentials, loginStatus });
