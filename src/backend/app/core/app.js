import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from '../routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setting up routes
Object.keys(routes).forEach((path) => {
  app.use(`/api/${path}`, routes[path]);
});

export default app;
