const Navbar = () => {
  const username = localStorage.getItem('username');
  if (username) {
    return (
      <nav>
        <p data-testid="username">{username}</p>
        <button data-testid="logout" type="button">Logout</button>
      </nav>
    );
  }
  return (
    <nav>
      <button data-testid="signup" type="button">Register</button>
      <button data-testid="login" type="button">Login</button>
    </nav>
  );
};

export default Navbar;
