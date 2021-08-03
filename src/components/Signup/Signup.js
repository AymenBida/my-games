const Signup = () => (
  <div>
    <form data-testid="signup" action="http://localhost:3001/users" method="post">
      <div>
        <label htmlFor="username">
          Username
          <input id="username" data-testid="username" type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email
          <input id="email" data-testid="email" type="email" />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <input id="password" data-testid="password" type="password" />
        </label>
      </div>
    </form>
  </div>
);

export default Signup;
