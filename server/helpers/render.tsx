import React from 'react';
import { renderToString, renderToNodeStream } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Response } from 'express';

import reducer from '~src/store';

import App from '~src/App';

const store = createStore(reducer, {
  str: 'server',
});

const render = (response?: Response) => {
  return new Promise<string>((resolve) => {
    let renderResult = `<script>window.__INITIAL_DATA__ = ${JSON.stringify(store.getState())};</script>`;

    const app = (
      <Provider store={store} key="provider">
        <App />
      </Provider>
    );

    if (response) {
      renderToNodeStream(app)
        .on('data', (chunk) => {
          const stringChunk = chunk.toString();
          response.write(stringChunk);
          renderResult += stringChunk;
        })
        .on('end', () => {
          resolve(renderResult);
        });
    } else {
      renderResult = renderToString(app);
    }

    resolve(renderResult);
  });
};

export default render;
