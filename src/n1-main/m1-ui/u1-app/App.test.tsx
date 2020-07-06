import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test(' find text "app test"', () => {
  const { getByText } = render(<App forTest={"app test"}/>);
  const linkElement = getByText(/app test/i);
  expect(linkElement).toBeInTheDocument();
});
