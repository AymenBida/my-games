import { useRouteMatch } from 'react-router';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import getGame from '../../../../api/getGame';
import GET_GAME from '../../../../redux/actions/GET_GAME';
import defaultImage from '../../assets/defaultImage.png';
import './style/game.scss';
import capitalize from '../../../../utilities/capitalize';
import Favourite from './Favourite/Favourite';

const Game = () => {
  const style = useRef({ backgroundImage: `url(${defaultImage})` });
  const { username } = useSelector((state) => state.loginStatus);
  const { params: { id } } = useRouteMatch();
  const dispatch = useDispatch();
  const { title, cover, year } = useSelector((state) => state.game);

  const callGame = async (gameId) => {
    const data = await getGame(gameId);
    dispatch(GET_GAME(data));
  };

  useEffect(() => {
    callGame(id);
    if (cover) { style.current.backgroundImage = cover; }
  }, []);

  return (
    <>
      <ToastContainer />
      <div>
        <div>
          <h1>{title ? capitalize(title) : 'Unknown Game'}</h1>
          <p>
            {`Year : ${year || 'Unknown'}`}
          </p>
          {username ? <Favourite gameId={id} /> : null}
        </div>
        <div style={style.current} className="game__cover" />
      </div>
    </>
  );
};

export default Game;
