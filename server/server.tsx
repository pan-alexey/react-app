import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';

const port = 3000;
const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  console.log(renderToString(<div>1</div>));
  // let content = renderToString(<div>1</div>);
  // res.send(content);
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));