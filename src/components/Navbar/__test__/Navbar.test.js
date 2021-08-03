import { render } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar element', () => {
  describe('If rendered when not logged in', () => {
    it('renders a Navbar with Signup and Login buttons', () => {
      const { getByTestId } = render(<Navbar />);
      const signup = getByTestId('signup');
      const login = getByTestId('login');

      expect(signup.textContent).toBe('Register');
      expect(signup.type).toBe('button');
      expect(login.textContent).toBe('Login');
      expect(login.type).toBe('button');
    });
  });

  describe('If rendered when logged in', () => {
    it('renders a Navbar with Username and with a Logout button', () => {
      localStorage.setItem('username', 'Example User');
      const { getByTestId } = render(<Navbar />);
      const username = getByTestId('username');
      const logout = getByTestId('logout');

      expect(username.textContent).toBe('Example User');
      expect(logout.textContent).toBe('Logout');
      expect(logout.type).toBe('button');
      localStorage.clear();
    });
  });
});
