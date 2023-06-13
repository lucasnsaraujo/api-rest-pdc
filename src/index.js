import express from 'express';

import routes from './routes.js';

const app = express();

app.use(express.json());

app.use(routes);

app.use((error, req, res, next) => {
  res.sendStatus(500);
});

const PORT = 1234;

app.listen(PORT, () => {
  console.log(`💻 Server started @ http://localhost:${PORT}`);
});