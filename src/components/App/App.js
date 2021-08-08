import './style/App.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import getGames from '../../api/getGames';
import Card from './components/Card/Card';
import GET_GAMES from '../../redux/actions/GET_GAMES';

const App = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);

  const callGames = async () => {
    const data = await getGames();
    dispatch(GET_GAMES(data));
  };

  useEffect(() => {
    callGames();
  }, []);

  return (
    <>
      <ToastContainer />
      {games.map(({
        id, title, cover, year,
      }) => (<Link to={`/games/${id}`} key={id}><Card title={title} cover={cover} year={year} /></Link>))}
    </>
  );
};

export default App;
