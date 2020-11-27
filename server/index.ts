import express from 'express';
import path from 'path';
import fs from 'fs';
import server from './app';
const app = express();

const rootPath = fs.realpathSync(process.cwd());
const resolve = (relativePath: string) => path.resolve(rootPath, relativePath);

app.use('/public', express.static(resolve('./public')));
app.use(express.static(resolve('./build/dist')));

app.use(server);

app.listen(8080, () => {
  console.log(`server started at http://localhost:8080`);
});
