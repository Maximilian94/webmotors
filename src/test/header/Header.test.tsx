import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

test('Logo redirect to home', () => {
  render(<App />);
  const logo = screen.getByRole('img', { name: 'logo' });
  userEvent.click(logo);
  expect(global.window.location.pathname).toEqual('/');
});
