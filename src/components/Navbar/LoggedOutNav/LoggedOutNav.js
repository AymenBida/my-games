import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetValues } from '../../../redux/actions/CREDENTIALS';

const LoggedOutNav = () => {
  const dispatch = useDispatch();

  return (
    <nav>
      <Link to="/signup"><button data-testid="signup" onClick={() => dispatch(resetValues())} type="button">Register</button></Link>
      <Link to="/login"><button data-testid="login" onClick={() => dispatch(resetValues())} type="button">Login</button></Link>
    </nav>
  );
};

export default LoggedOutNav;
