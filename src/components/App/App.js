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
      <p className="mb-0">{`Hello${username ? ` ${username}` : ''},`}</p>
      <p>You can find here the latest popular games.</p>
      {(username && token) ? (
        <div className="float-end">
          <label htmlFor="onlyFav" className="mb-3">
            <input
              id="onlyFav"
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckBox}
              className="me-1"
            />
            Only show Favourites
          </label>
        </div>
      ) : null}
      {favouriteGames.map(({
        id, title, cover, year,
      }) => (<Link to={`/games/${id}`} key={id}><Card title={title} cover={cover} year={year} /></Link>))}
    </>
  );
};

export default App;
