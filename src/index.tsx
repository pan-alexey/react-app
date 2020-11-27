/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createStore } from 'redux';
import { hot } from 'react-hot-loader/root';

import ReactDOM from 'react-dom';

import Main from './Main';
import reducer from './store';
import './sass/app.scss';

const rootElement = document.getElementById('root');

const HotMain = hot(Main);

if (rootElement) {
  const __STORE__ = (window as any).__STORE__ || {};
  const store = createStore(reducer, __STORE__);

  const data = (window as any).__DATA__ || {};

  const reactDomHandler = rootElement.childNodes.length ? ReactDOM.hydrate : ReactDOM.render;
  reactDomHandler(<HotMain store={store} data={data} />, rootElement);
}
