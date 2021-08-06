import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import toast from '../../MyToaster/MyToaster';
import * as auth from '../../../redux/actions/LOGIN_STATUS';

const LoggedInNav = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.loginStatus);

  const logout = () => {
    dispatch(auth.logout());
    localStorage.clear();
    toast('You are now logged out!', 'warning');
  };

  return (
    <nav>
      <ToastContainer />
      <p data-testid="username">{username}</p>
      <Link
        to={{ pathname: '/', state: { failure: 'You are now logged out!' } }}
        onClick={logout}
      >
        <button data-testid="logout" type="button">Logout</button>
      </Link>
    </nav>
  );
};

export default LoggedInNav;
