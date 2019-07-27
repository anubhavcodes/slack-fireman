import request from 'request';
import 'dotenv/config';
import client from '../core/redis';
import Redis from './redis';

const authorizeUser = (req, res) => {
  const { code } = req.query;
  if (!code) {
    res.status(401).send('Unauthenticated');
  }

  const form = {
    client_id: process.env.SLACK_CLIENT_ID,
    client_secret: process.env.SLACK_CLIENT_SECRET,
    code,
  };

  request.post(`${process.env.SLACK_API_URL}oauth.access`, { form }, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      const data = JSON.parse(body);
      Redis(client).saveAuthCredentials(data.team_id, body);
      res.sendStatus(200);
    } else {
      console.log(err);
    }
  });
};

export default {
  authorizeUser,
};
