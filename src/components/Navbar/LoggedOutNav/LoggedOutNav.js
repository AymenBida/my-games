import { Link } from 'react-router-dom';

const LoggedOutNav = () => (
  <>
    <Link to="/signup" className="ms-auto">
      <button
        data-testid="signup"
        type="button"
        className="btn btn-sm btn-danger clr-orange text-white rounded-pill px-3"
      >
        Sign up
      </button>
    </Link>
    <Link to="/login">
      <button
        data-testid="login"
        type="button"
        className="btn btn-sm btn-success text-white rounded-pill px-3"
      >
        Log in
      </button>
    </Link>
  </>
);

export default LoggedOutNav;
