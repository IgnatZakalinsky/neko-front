import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test(' find text "test"', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/app test/i);
  expect(linkElement).toBeInTheDocument();
});
