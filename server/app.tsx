import express from 'express';
import ejs from 'ejs';

import header from './template/header.ejs';
import footer from './template/footer.ejs';
import renderApp from './helpers/renderApp';
const app = express.Router();

app.use('*', (req, res, next) => {
  next();
});

const templateHeader = ejs.compile(header);
const templateFooter = ejs.compile(footer);

app.get('*', async (req, res) => {
  res.write(templateHeader());
  await renderApp(req, res);
  res.write(templateFooter());
  res.end();
});

export default app;
