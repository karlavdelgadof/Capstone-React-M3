import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import CoinsContainer from '../components/CoinsContainer';

describe(' rendering test', () => {
  test('match snapshot for App', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <CoinsContainer />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
