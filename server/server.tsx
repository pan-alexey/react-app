import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../src/App';

const app = express.Router();

app.get('/', (req, res) => {
  res.write('<!DOCTYPE html><html lang="en">');
  res.write('<base href="http://localhost:3000/">');

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
  res.write('</body>');
  res.write('<script src="/main.js"></script>');
  res.write('</html>');
  res.end();
})

export default app;