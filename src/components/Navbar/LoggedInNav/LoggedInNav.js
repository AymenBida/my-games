import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import toast from '../../MyToaster/MyToaster';
import * as auth from '../../../redux/actions/LOGIN_STATUS';

const LoggedInNav = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.loginStatus);

  const logout = () => {
    toast('You are now logged out!', 'warning');
    dispatch(auth.logout());
    localStorage.clear();
  };

  return (
    <nav>
      <ToastContainer />
      <p data-testid="username">{username}</p>
      <button data-testid="logout" onClick={logout} type="button">Logout</button>
    </nav>
  );
};

export default LoggedInNav;
