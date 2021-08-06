import { useSelector } from 'react-redux';
import LoggedInNav from './LoggedInNav/LoggedInNav';
import LoggedOutNav from './LoggedOutNav/LoggedOutNav';

const Navbar = () => {
  const { username } = useSelector((state) => state.loginStatus);

  if (username) {
    return (
      <LoggedInNav />
    );
  }
  return (
    <LoggedOutNav />
  );
};

export default Navbar;
