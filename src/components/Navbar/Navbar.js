import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as auth from '../../redux/actions/LOGIN_STATUS';

const Navbar = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.loginStatus);
  const { username } = status;

  const logout = () => {
    dispatch(auth.logout());
    localStorage.clear();
    window.location.reload();
  };

  if (username) {
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
  }
  return (
    <nav>
      <Link to="/signup"><button data-testid="signup" type="button">Register</button></Link>
      <button data-testid="login" type="button">Login</button>
    </nav>
  );
};

export default Navbar;
