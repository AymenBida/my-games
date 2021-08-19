import { GET_GAME } from './actionTypes';

const parseData = (data) => {
  const newElem = {
    cover: data.cover ?? undefined,
    year: data.year ?? undefined,
  };
  return { ...data, ...newElem };
};

const getGame = (data) => ({
  type: GET_GAME,
  payload: parseData(data),
});

export default getGame;
