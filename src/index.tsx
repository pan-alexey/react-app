/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';
import { createStore, Action, StateFromReducersMapObject } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  value: 0,
};

declare const window: {
  __PRELOADED_STATE__: unknown;
};
window.__PRELOADED_STATE__ = initialState;
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const reducer = (state = initialState, action: Action) => {
  return state;
};

// Инициализация хранилища
const store = createStore(reducer, preloadedState);

const rootElement = document.getElementById('root');

if (rootElement) {
  const reactDomHandler = rootElement.childNodes.length ? ReactDOM.hydrate : ReactDOM.render;
  reactDomHandler(
    <Provider store={store}>
      <App />,
    </Provider>,
    rootElement,
  );
}
