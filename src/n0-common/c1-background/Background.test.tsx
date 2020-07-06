import React from 'react';
import { render } from '@testing-library/react';
import Background from "./Background";

test(' find text "default type Background"', () => {
  const { getByText } = render(<Background>test default Background</Background>);
  const linkElement = getByText(/default type Background/i);
  expect(linkElement).toBeInTheDocument();
});

test(' find text "Background type 1"', () => {
  const { getByText } = render(<Background forTest={"Background type "} type={1}>x</Background>);
  const linkElement = getByText(/Background type 1/i);
  expect(linkElement).toBeInTheDocument();
});

test(' find text "Background type 2"', () => {
  const { getByText } = render(<Background forTest={"Background type "} type={2}>x</Background>);
  const linkElement = getByText(/Background type 2/i);
  expect(linkElement).toBeInTheDocument();
});
