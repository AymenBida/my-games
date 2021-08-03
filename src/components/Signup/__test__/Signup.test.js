import { render } from '@testing-library/react';
import Signup from '../Signup';

describe('Signup form', () => {
  describe('When rendered correctly', () => {
    it('renders a Signup form with username, email, and password fields, and a submit button', () => {
      const { getByTestId } = render(<Signup />);
      const signupForm = getByTestId('signup');

      const username = getByTestId('username');
      const password = getByTestId('password');
      const email = getByTestId('email');

      expect(signupForm.method).toBe('post');
      expect(username.value).toBe('');
      expect(username.type).toBe('text');
      expect(password.value).toBe('');
      expect(password.type).toBe('password');
      expect(email.value).toBe('');
      expect(email.type).toBe('email');
    });
  });

  describe('When changing a value in the input', () => {
    it('should change the value accordingly', () => {
      
    })
  })
});
