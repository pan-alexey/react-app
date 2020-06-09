import express from 'express';
import server from './app';
const app = express();

// use static paths (build paths)

app.use(server);
app.listen(8080, () => {
  console.log(`server started at http://localhost:8080`);
});
