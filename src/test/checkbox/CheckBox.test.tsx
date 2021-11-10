import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

test('Logo redirect to home', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Novos' });
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeChecked();
  userEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});
