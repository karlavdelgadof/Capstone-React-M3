import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import store from '../redux/configureStore';

const data = [
  {
    id: '90',
    symbol: 'BTC',
    name: 'Bitcoin',
    nameid: 'bitcoin',
    rank: 1,
    price_usd: '19893.35',
    percent_change_24h: '-1.84',
    percent_change_1h: '-0.35',
    percent_change_7d: '-8.43',
    price_btc: '1.00',
    market_cap_usd: '380248411622.98',
    volume24: 26392897108.934387,
    volume24a: 30633200229.819313,
    csupply: '19114346.00',
    tsupply: '19114346',
    msupply: '21000000',
  },
];

const handlers = [
  rest.get('https://api.coinlore.net/api/tickers/?start=100&limit=100', (req, res, ctx) =>
    res(ctx.json({ data })),
  ),
];
const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('fetches & receives coins after dispatching', async () => {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </React.StrictMode>,
  );

  expect(await screen.findByText(/bitcoin/i)).toBeInTheDocument();
});