import './style/App.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import getGames from '../../api/getGames';
import Card from './components/Card/Card';
import GET_GAMES from '../../redux/actions/GET_GAMES';
import * as auth from '../../redux/actions/LOGIN_STATUS';

const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const games = useSelector((state) => state.games);
  const status = useSelector((state) => state.loginStatus);
  const { success, failure } = status;

  if (success || failure) { history.replace('/', undefined); }

  const callGames = async () => {
    const data = await getGames();
    dispatch(GET_GAMES(data));
  };

  useEffect(() => {
    callGames();
    dispatch(auth.success(history.location.state?.success));
    dispatch(auth.failure(history.location.state?.failure));
    return (() => {
      dispatch(auth.success());
    });
  }, []);

  return (
    <>
      {console.log(history.location.state, failure)}
      {success ? <div>{success}</div> : null}
      {failure ? <div>{failure}</div> : null}
      {games.map(({
        id, title, cover, year,
      }) => (<Card key={id} title={title} cover={cover} year={year} />))}
    </>
  );
};

export default App;
