import React from 'react';
import { render } from '@testing-library/react';
import { Home } from './Home';

test('renders learn react link', () => {
  const { getByText } = render(<Home />);
  const headerElement = getByText(/New website coming!/i);
  expect(headerElement).toBeInTheDocument();
});
