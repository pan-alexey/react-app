import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../src/App';

const port = 3001;
const app = express();

// app.use(express.static(__dirname + '/client'));

app.get('/', (req, res) => {
res.send(`
<!DOCTYPE html>
  <html lang="en">
  <base href="http://localhost:3000/">
  <head>
    <meta charset="UTF-8" name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta name="description" content="React + Typescript + SSR + Code-splitting" />
    <meta name="google" content="notranslate">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <title>Hello World!</title>
  </head>
  
  <body>
    <div id="root">${renderToString(<App />)}</div>
  </body>
  <script src="/main.js"></script>
  </body>
  </html>
`);
  // let content = renderToString(<div>1</div>);
  // res.send(content);
})

app.listen(port, () => console.log('Example app listening on port 3001!'));