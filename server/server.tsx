import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../src/App';

const app = express.Router();

let couner = 0;

app.get('*', (req, res) => {
  console.warn(couner++);

  res.write('<!DOCTYPE html><html lang="en">');
  res.write(
  `<head>
    <meta charset="UTF-8" name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta name="description" content="React + Typescript + SSR + Code-splitting" />
    <meta name="google" content="notranslate">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <title>Hello World!</title>
  </head>`);
  res.write('<body>');
  const html = renderToString(<App />);
  res.write(`<div id="root">${html}</div>`);
  res.write('<div>123</div>');
  res.write('</body>');
  res.write('<script src="/index.js"></script>');
  res.write('</html>');
  res.end();
})

export default app;