import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoggedInNav from './LoggedInNav/LoggedInNav';
import LoggedOutNav from './LoggedOutNav/LoggedOutNav';

const Navbar = () => {
  const { username } = useSelector((state) => state.loginStatus);

  return (
    <>
      <Link to="/">Home</Link>
      {username ? <LoggedInNav /> : <LoggedOutNav />}
    </>
  );
};

export default Navbar;
