import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store, { history } from './redux/store';

import { ConnectedRouter } from 'connected-react-router';

import Router from './Router';

import reportWebVitals from './reportWebVitals';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="container">
          <Router />
        </div>
      </ConnectedRouter>
    </Provider>
    ,{' '}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
