/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import { createStore, applyMiddleware } from 'redux';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import reducer from './store';

declare const window: {
  __PRELOADED_STATE__: unknown;
};
window.__PRELOADED_STATE__ = { str: 'client1' };
const __PRELOADED_STATE__ = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(reducer, { str: 'client' });

const rootElement = document.getElementById('root');

if (rootElement) {
  const reactDomHandler = rootElement.childNodes.length ? ReactDOM.hydrate : ReactDOM.render;
  reactDomHandler(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement,
  );
}
