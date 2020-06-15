import React from 'react';
import { renderToString, renderToNodeStream } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Response, Request } from 'express';

import reducer from '~src/store';

import App from '~src/App';

const render = (request: Request, response?: Response) => {
  // request for create store param
  const store = createStore(reducer, {
    str: new Date().toUTCString(),
    color: 'blue',
  });

  return new Promise<string>((resolve) => {
    const state = `<script>window.__INITIAL_DATA__ = ${JSON.stringify(store.getState())};</script>`;
    let renderResult = '';
    const app = (
      <Provider store={store} key="provider">
        <App />
      </Provider>
    );

    if (response) {
      response.write(state);
      renderResult += state;
      response.write('<div id="root">');
      renderToNodeStream(app)
        .on('data', (chunk) => {
          const stringChunk = chunk.toString();
          response.write(stringChunk);
          renderResult += stringChunk;
        })
        .on('end', () => {
          response.write('</div>');
          resolve(renderResult);
        });
    } else {
      renderResult += state;
      renderResult += '<div id="root">';
      renderResult += renderToString(app);
      renderResult += '</div>';
    }

    resolve(renderResult);
  });
};

export default render;
