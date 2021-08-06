import './style/App.scss';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import getGames from '../../api/getGames';
import Card from './components/Card/Card';
import GET_GAMES from '../../redux/actions/GET_GAMES';
// import * as auth from '../../redux/actions/LOGIN_STATUS';

const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);
  // const status = useSelector((state) => state.loginStatus);
  const success = useRef({ message: history.location.state?.success, done: false });
  const failure = useRef({ message: history.location.state?.failure, done: false });

  const callGames = async () => {
    const data = await getGames();
    dispatch(GET_GAMES(data));
  };

  const useToastMessage = (ref) => {
    if (!ref.current.done && ref.current.message) {
      toast.success(ref.current.message);
      // eslint-disable-next-line no-param-reassign
      ref.current.done = true;
      // eslint-disable-next-line no-param-reassign
      ref.current.message = undefined;
      history.replace({ pathname: '/', state: undefined });
    }
  };

  useEffect(() => {
    useToastMessage(success);
    useToastMessage(failure);
    callGames();
  }, []);

  return (
    <>
      <Toaster />
      {games.map(({
        id, title, cover, year,
      }) => (<Card key={id} title={title} cover={cover} year={year} />))}
    </>
  );
};

export default App;
