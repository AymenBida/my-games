import './style/App.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import getGames from '../../api/getGames';
import Card from './components/Card/Card';
import GET_GAMES from '../../redux/actions/GET_GAMES';
import * as fav from '../../redux/actions/FAVOURITES';
import getFavourites from '../../api/getFavourites';

const App = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);
  const { username, token } = useSelector((state) => state.loginStatus);
  const [isChecked, setIsChecked] = useState(false);
  const favourites = useSelector((state) => state.favourites);
  const favouriteGames = isChecked ? games.filter((game) => favourites.includes(game.id)) : games;

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const callFavourites = async () => {
    const data = await getFavourites(token);
    if (Array.isArray(data)) {
      dispatch(fav.getFavourites(data));
    }
  };

  // if (username && token) {
  //   console.log('im the problem');
  //   callFavourites();
  // }

  const callGames = async () => {
    const data = await getGames();
    dispatch(GET_GAMES(data));
  };

  useEffect(() => {
    callGames();
    if (username && token) {
      callFavourites();
    }
  }, [username]);

  return (
    <>
      <ToastContainer />
      {(username && token) ? (
        <label htmlFor="onlyFav">
          <input
            id="onlyFav"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckBox}
          />
          Only Favourites
        </label>
      ) : null}
      {favouriteGames.map(({
        id, title, cover, year,
      }) => (<Link to={`/games/${id}`} key={id}><Card title={title} cover={cover} year={year} /></Link>))}
    </>
  );
};

export default App;
