import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../src/App';

const port = 3000;
const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  console.log(renderToString(<App />));
  // let content = renderToString(<div>1</div>);
  // res.send(content);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));