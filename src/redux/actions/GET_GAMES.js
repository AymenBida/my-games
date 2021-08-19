import { GET_GAMES } from './actionTypes';

const parseData = (data) => {
  const newData = data.map((ele) => {
    const newElem = {
      cover: ele.cover ?? undefined,
      year: ele.year ?? undefined,
    };
    return { ...ele, ...newElem };
  });
  return newData;
};

const getGames = (data) => ({
  type: GET_GAMES,
  payload: parseData(data),
});

export default getGames;
