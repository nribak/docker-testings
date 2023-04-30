import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders counter link', () => {
  render(<App />);
  const linkElement = screen.getByText('Counter!');
  expect(linkElement).toBeInTheDocument();
});
