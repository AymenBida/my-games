import {
  FAILURE, SUCCESS, LOGIN, LOGOUT,
} from './actionTypes';

export const failure = (data = undefined) => ({
  type: FAILURE,
  payload: data,
});

export const success = (data = undefined) => ({
  type: SUCCESS,
  payload: data,
});

export const login = (data) => ({
  type: LOGIN,
  payload: data,
});

export const logout = () => ({
  type: LOGOUT,
});
