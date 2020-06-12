/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { createStore, applyMiddleware } from 'redux';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import reducer from './store';
import './sass/app.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const __PRELOADED_STATE__ = (window as any).__INITIAL_DATA__;
  const store = createStore(reducer, __PRELOADED_STATE__);

  const reactDomHandler = rootElement.childNodes.length ? ReactDOM.hydrate : ReactDOM.render;
  reactDomHandler(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement,
  );
}
