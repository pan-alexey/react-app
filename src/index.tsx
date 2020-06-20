/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createStore } from 'redux';
import { hot } from 'react-hot-loader/root';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import reducer from './store';
import './sass/app.scss';

const rootElement = document.getElementById('root');

const HotApp = hot(App);

if (rootElement) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const __STORE__ = (window as any).__STORE__ || {};
  const __DATA__ = (window as any).__DATA__ || {};

  const store = createStore(reducer, __STORE__);

  const reactDomHandler = rootElement.childNodes.length ? ReactDOM.hydrate : ReactDOM.render;
  reactDomHandler(
    <Provider store={store}>
      <HotApp data={__DATA__} />
    </Provider>,
    rootElement,
  );
}
