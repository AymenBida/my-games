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

  const callGame = async (gameId) => {
    const data = await getGame(gameId);
    dispatch(GET_GAME(data));
  };

  useEffect(() => {
    callGame(id);
  }, []);

  const { title, year, cover } = useSelector((state) => state.game);

  if (cover) {
    style.current = { backgroundImage: `url(${cover})` };
  }

  return (
    <>
      <ToastContainer />
      <div>
        <div>
          <h1>{title ? capitalize(title) : '-'}</h1>
          <p>
            {`Year : ${year || '-'}`}
          </p>
          {username ? <Favourite gameId={parseInt(id, 10)} /> : null}
        </div>
        <div style={style.current} className="game__cover" />
      </div>
    </>
  );
};

export default Game;
