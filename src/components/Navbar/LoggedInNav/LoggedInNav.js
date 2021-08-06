import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import * as auth from '../../../redux/actions/LOGIN_STATUS';

const LoggedInNav = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.loginStatus);

  const logout = () => {
    dispatch(auth.logout());
    localStorage.clear();
    history.go(0);
  };

  return (
    <nav>
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
