import { render, screen } from '@testing-library/react';
import { App } from './App';
import { MemoryRouter } from 'react-router';
import { AccountContext } from './AccountContext';

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <AccountContext.Provider value={{ account: {"username": "Anonymous"}, setAccount: jest.fn() }}>
        <App />
      </AccountContext.Provider>
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/TravelSkåne/i);
  expect(linkElement).toBeInTheDocument();
});