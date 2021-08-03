import { combineReducers } from 'redux';
import games from './games';
import signup from './signup';

export default combineReducers({ games, signup });
