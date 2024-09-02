import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Cursor from './App/Animation/cursor';

test('renders learn react link', () => {
  render(<Cursor />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
