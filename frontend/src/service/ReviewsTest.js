import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // extra matchers
import { AllReviews } from './Reviews';

test('renders the reviews page with correct text', () => {
  render(<AllReviews />);
  
  const reviewsText = screen.getByText(/A collection of user stories of unique happenings across cities, towns, history, culture, nature, design innovation, and more./i); 
  expect(reviewsText).toBeInTheDocument();           
});