import './style/App.scss';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getGames from '../../api/getGames';
import Card from './components/Card/Card';
import GET_GAMES from '../../redux/actions/GET_GAMES';

const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);
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
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {games.map(({
        id, title, cover, year,
      }) => (<Card key={id} title={title} cover={cover} year={year} />))}
    </>
  );
};

export default App;
