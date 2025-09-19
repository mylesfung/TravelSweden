import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // extra matchers
import { CreateAccount, SignIn } from './Account';
import { MemoryRouter } from 'react-router';

test('renders the create-account page with correct text', () => {
  render(
    <MemoryRouter>
      <CreateAccount />
    </MemoryRouter>
  );
  
  const createAccountText = screen.getByText(/Create a new account/i); 
  expect(createAccountText).toBeInTheDocument();           
});
