import { fireEvent, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Navbar from '../Navbar';

describe('Navbar element', () => {
  describe('If rendered when not logged in', () => {
    it('renders a Navbar with Signup and Login buttons', () => {
      const history = createMemoryHistory();
      const { getByTestId } = render(<Router history={history}><Navbar /></Router>);
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
      const history = createMemoryHistory();
      const { getByTestId } = render(<Router history={history}><Navbar /></Router>);
      const username = getByTestId('username');
      const logout = getByTestId('logout');

      expect(username.textContent).toBe('Example User');
      expect(logout.textContent).toBe('Logout');
      expect(logout.type).toBe('button');
      localStorage.clear();
    });
  });

  describe('When Register button is clicked', () => {
    it('redirects to the /signup route', () => {
      const history = createMemoryHistory();
      const { getByTestId } = render(<Router history={history}><Navbar /></Router>);
      const signup = getByTestId('signup');

      fireEvent.click(signup);

      expect(history.location.pathname).toBe('/signup');
    });
  });
});
