import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../pages/Home';
import store from '../Redux/ConfigureStore';

test('should match the home page Snapshot', () => {
  const tree = render(
    <BrowserRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </BrowserRouter>,
  );
  expect(tree).toMatchSnapshot();
});
