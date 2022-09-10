import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Footer from '../components/Footer';

describe('Footer rendering test', () => {
  test('match snapshot for Footer', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Footer />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
