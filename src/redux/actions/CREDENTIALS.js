import { CHANGE_NAME, CHANGE_EMAIL, CHANGE_PASSWORD } from './actionTypes';

export const changeName = (data) => ({
  type: CHANGE_NAME,
  payload: data,
});

export const changeEmail = (data) => ({
  type: CHANGE_EMAIL,
  payload: data,
});

export const changePassword = (data) => ({
  type: CHANGE_PASSWORD,
  payload: data,
});
