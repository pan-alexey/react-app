import React from 'react';
import { renderToString, renderToNodeStream } from 'react-dom/server';
import { Response, Request } from 'express';

import { createStore } from 'redux';
import reducer from '~src/store';

import Main from '~src/main';

const render = (request: Request, response?: Response) => {
  // request for create store param
  const store = createStore(reducer, {
    str: new Date().toUTCString(),
    color: 'yellow',
  });

  const data = {
    date: new Date().toUTCString(),
  };

  return new Promise<string>((resolve) => {
    let state = `<script>window.__DATA__ = ${JSON.stringify(data)};</script>`;
    state += `<script>window.__STORE__ = ${JSON.stringify(store.getState())};</script>`;

    const app = <Main store={store} data={data} />;

    let renderResult = '';
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
