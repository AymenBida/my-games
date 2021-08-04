import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import * as auth from '../../redux/actions/LOGIN_STATUS';

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const status = useSelector((state) => state.loginStatus);
  const { username } = status;

  const logout = () => {
    dispatch(auth.logout());
    localStorage.clear();
    history.push({ pathname: '/', state: { failure: 'You are now logged out!' } });
  };

  if (username) {
    return (
      <nav>
        <p data-testid="username">{username}</p>
        <button data-testid="logout" onClick={logout} type="button">Logout</button>
      </nav>
    );
  }
  return (
    <nav>
      <Link to="/signup"><button data-testid="signup" type="button">Register</button></Link>
      <button data-testid="login" type="button">Login</button>
    </nav>
  );
};

export default Navbar;
