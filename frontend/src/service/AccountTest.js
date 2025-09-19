import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // extra matchers
import { CreateAccount, MyAccount, SignIn } from './Account';

test('renders the create-account page with correct text', () => {
  render(<CreateAccount />);
  
  const createAccountText = screen.getByText(/Create a new account/i); 
  expect(createAccountText).toBeInTheDocument();           
});

test('renders the sign-in page with correct text', () => {
  render(<SignIn />);
  
  const signInText = screen.getByText(/Sign in to your account/i); 
  expect(signInText).toBeInTheDocument();           
});
