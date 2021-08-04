import { combineReducers } from 'redux';
import games from './games';
import signup from './signup';
import loginStatus from './loginStatus';

export default combineReducers({ games, signup, loginStatus });
