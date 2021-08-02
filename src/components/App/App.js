import './style/App.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getGames from '../../api/getGames';
import Card from '../Card/Card';
import GET_GAMES from '../../redux/actions/GET_GAMES';

const App = () => {
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  const callGames = async () => {
    const data = await getGames();
    dispatch(GET_GAMES(data));
  };

  useEffect(() => {
    callGames();
  }, []);
  return (
    games.map(({
      id, title, cover, year,
    }) => (<Card key={id} title={title} cover={cover} year={year} />))
  );
};

export default App;
