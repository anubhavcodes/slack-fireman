import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => console.log('App running at http://localhost:3000'));

app.get('/', (req, res) => {
  res.json({ status: 'working' });
});
