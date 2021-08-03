import './style/App.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import getGames from '../../api/getGames';
import Card from './components/Card/Card';
import GET_GAMES from '../../redux/actions/GET_GAMES';

const App = () => {
  const history = useHistory();
  const [successMessage] = useState(history.location.state);
  if (successMessage) { history.replace('/', undefined); }

  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  const callGames = async () => {
    const data = await getGames();
    dispatch(GET_GAMES(data));
  };

  useEffect(() => {
    callGames();
    return (() => {
    });
  }, []);

  return (
    <>
      {successMessage ? <div>{successMessage}</div> : null}
      {games.map(({
        id, title, cover, year,
      }) => (<Card key={id} title={title} cover={cover} year={year} />))}
    </>
  );
};

export default App;
