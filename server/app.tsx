import express from 'express';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../src/store';
const store = createStore(reducer, {
  str: 'server',
});

import App from '../src/App';
const app = express.Router();

app.use('public', express.static('public'));

app.use('*', (req, res, next) => {
  next();
});

app.get('*', (req, res) => {
  res.write('<!DOCTYPE html><html lang="en">');
  res.write(
    `<head>
    <meta charset="UTF-8" name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta name="description" content="React + Typescript + SSR" />
    <meta name="google" content="notranslate">
    <link rel="shortcut icon" href="/public/favicon.ico" type="image/x-icon">
    <link rel="icon" href="/public/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/main.css">
    <title>Hello World!</title>
  </head>`,
  );
  res.write('<body>');
  res.write(`<div id="root">`);

  renderToNodeStream(
    <Provider store={store} key="provider">
      <App />
    </Provider>,
  )
    .on('data', (chunk) => {
      const data = chunk.toString();
      res.write(data);
    })
    .on('end', () => {
      res.write(`</div>`);
      res.write('</body>');
      res.write('<script src="/index.js"></script>');
      res.write('</html>');
      res.end();
    });
});

export default app;
