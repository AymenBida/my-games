import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoggedInNav from './LoggedInNav/LoggedInNav';
import LoggedOutNav from './LoggedOutNav/LoggedOutNav';
import './style/navbar.scss';

const Navbar = () => {
  const { username } = useSelector((state) => state.loginStatus);

  return (
    <nav className="mainNavbar py-3">
      <Link to="/" className="btn btn-light btn-sm fw-bolder rounded-pill px-3">Home</Link>
      {username ? <LoggedInNav /> : <LoggedOutNav />}
    </nav>
  );
};

export default Navbar;
