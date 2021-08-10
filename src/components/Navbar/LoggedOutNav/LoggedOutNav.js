import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetValues } from '../../../redux/actions/CREDENTIALS';

const LoggedOutNav = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Link to="/signup" className="ms-auto">
        <button
          data-testid="signup"
          onClick={() => dispatch(resetValues())}
          type="button"
          className="btn btn-sm btn-danger clr-orange text-white rounded-pill px-3"
        >
          Sign up
        </button>
      </Link>
      <Link to="/login">
        <button
          data-testid="login"
          onClick={() => dispatch(resetValues())}
          type="button"
          className="btn btn-sm btn-success text-white rounded-pill px-3"
        >
          Log in
        </button>
      </Link>
    </>
  );
};

export default LoggedOutNav;
