import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import toast from '../../MyToaster/MyToaster';
import * as auth from '../../../redux/actions/LOGIN_STATUS';
import { clearFavourites } from '../../../redux/actions/FAVOURITES';

const LoggedInNav = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.loginStatus);

  const logout = () => {
    toast('You are now logged out!', 'warning');
    dispatch(auth.logout());
    dispatch(clearFavourites());
    localStorage.clear();
  };

  return (
    <>
      <ToastContainer />
      <span className="ms-auto" data-testid="username">{username}</span>
      <button
        data-testid="logout"
        onClick={logout}
        className="btn btn-sm btn-danger text-white rounded-pill px-3"
        type="button"
      >
        Logout
      </button>
    </>
  );
};

export default LoggedInNav;
